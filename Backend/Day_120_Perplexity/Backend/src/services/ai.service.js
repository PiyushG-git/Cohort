import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { response } from "express";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GOOGLE_API_KEY
});


export async function testAi() {
    model.invoke("what is the capital of INDIA?").then((response)=>{
        console.log(response.text);  
    })
}