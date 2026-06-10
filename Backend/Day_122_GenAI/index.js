import "dotenv/config";
import readline from "readline";
import { ChatMistralAI } from "@langchain/mistralai";
import {HumanMessage,tool,createAgent} from "langchain"
import { sendEmail } from "./mail.service.js";
import * as z from "zod"
// zod is use to handle the format of ai generate content

// tool is a function that takes a function and an object as arguments and returns a new function that can be used as a tool in the agent. The object contains the name, description, and schema of the tool. The schema is used to validate the input that the tool receives from the agent. In this case, we are creating a tool called "emailTool" that uses the "sendEmail" function to send an email. The schema defines the expected input for the tool, which includes the recipient's email address, the HTML content of the email, and the subject of the email.
const emailTool=tool(
  sendEmail,   // function that will be called when the tool is used
  {
    name:"emailTool",  // name of the tool
    description:"Use this tool to send an email",     // description of the tool
    schema:z.object({   // schema of the input that the tool expects
      to: z.string().describe("The recipient's email address"),
      html:z.string().describe("The HTML content of the email"),
      subject:z.string().describe("The subject of the email")
    })
  }
)

// after this we need to create a agent and pass the tool to it, then we can use the agent to generate the response and it will automatically use the tool when needed


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: process.env.MISTRAL_API_KEY,
});

const agent = createAgent({
  model,
  tools:[emailTool]
})




const messages = []


// Convert to async
function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

console.log("🤖 Chat started (type 'exit' to quit)\n");

while (true) {
  const userInput = await askQuestion("You: ");

  if (userInput.toLowerCase() === "exit") {
    console.log("Chat ended.");
    break;
  }
  messages.push(new HumanMessage(userInput))

  // const response = await model.invoke(message);
  const response = await agent.invoke({
    messages
  });

  messages.push(response.messages[response.messages.length-1])

  // console.log(response);
  console.log(response.messages[response.messages.length-1].text);

  // console.log("AI:", response.content);
}

rl.close();