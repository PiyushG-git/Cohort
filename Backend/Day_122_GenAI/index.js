import "dotenv/config";
import readline from "readline";
import { ChatMistralAI } from "@langchain/mistralai";
import {HumanMessage,tool,createAgent} from "langchain"
import { sendEmail } from "./mail.service.js";
import * as z from "zod"
// zod is use to handle the format of ai generate content

const emailTool=tool(
  sendEmail,
  {
    name:"emailTool",
    description:"Use this tool to send an email",
    schema:z.object({
      to: z.string().describe("The recipient's email address"),
      html:z.string().describe("The HTML content of the email"),
      subject:z.string().describe("The subject of the email")
    })
  }
)


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