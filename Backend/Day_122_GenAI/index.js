// import "dotenv/config";
// import Readline from "readline";
// import { ChatMistralAI } from "@langchain/mistralai";
// import { log } from "console";

// const rl = Readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const model = new ChatMistralAI({
//   model: "mistral-small-latest",
//   apiKey: process.env.MISTRAL_API_KEY,
// });


// // const response = await model.invoke("What is the captial of INDIA under 10 word")

// while(true){
//     const userInput=await rl.question("You: ")
//     const response = await model.invoke(userInput)
//     console.log("Ai",response.text);
// }


// console.log(response.text);


// rl.close()



import "dotenv/config";
import readline from "readline";
import { ChatMistralAI } from "@langchain/mistralai";
import {HumanMessage} from "langchain"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: process.env.MISTRAL_API_KEY,
});

const message = []


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
  message.push(new HumanMessage(userInput))

  const response = await model.invoke(message);

  message.push(response)

  console.log("AI:", response.content);
}

rl.close();