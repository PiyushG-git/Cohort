import { PDFParse } from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MistralAIEmbeddings } from "@langchain/mistralai"
import { Pinecone } from '@pinecone-database/pinecone'
import dotenv from 'dotenv';
import fs from 'fs';
import { parse } from "path";
dotenv.config(); 


const pc = new Pinecone({ apiKey:process.env.PINECONE_API_KEY });
const index=pc.index("cohort-rag")

// let dataBuffer = fs.readFileSync('./story.pdf')


// const parser=new PDFParse({
//     data:dataBuffer
// })

// const data=await parser.getText()


const embeddings = new MistralAIEmbeddings({
    apiKey: process.env.MISTRAL_API_KEY,
    model: "mistral-embed"
})


// console.log(data);

// const splitter = new RecursiveCharacterTextSplitter({
//     chunkSize: 500,
//     chunkOverlap: 0,
// })

// const chunks = await splitter.splitText(data.text)

// console.log(chunks,chunks.length);


// const docs = await Promise.all(chunks.map(async (chunk) => {
//     const embedding = await embeddings.embedQuery(chunk)
//     return {
//         text: chunk,
//         embedding
//     }
// }))

// console.log(docs);

// 1024 dimensions for mistral-embed, 512 for mistral-embed-mini

// const result = await index.upsert({
//     records: docs.map((doc, i) => ({
//         id: `doc-${i}`,
//         values: doc.embedding,
//         metadata: {
//             text: doc.text
//         }
//     }))
// })


// we stored the data in the index, now we can query it using the same embedding model to find relevant chunks of text based on a query.


// console.log(result);



const queryEmbedding = await embeddings.embedQuery("how was the internship experience?");




console.log(queryEmbedding)

const result = await index.query({
    vector: queryEmbedding,
    topK: 2,
    includeMetadata: true
})


console.log(JSON.stringify(result))