# Retrieval-Augmented Generation (RAG) using Mistral AI + Pinecone + LangChain

## Overview

This project demonstrates a simple **RAG (Retrieval-Augmented Generation)** pipeline using:

- PDF Documents
- LangChain Text Splitters
- Mistral Embeddings
- Pinecone Vector Database

The goal is to:

1. Load a PDF document.
2. Extract text from the PDF.
3. Split the text into smaller chunks.
4. Convert chunks into embeddings.
5. Store embeddings in Pinecone Vector Database.
6. Convert user query into embedding.
7. Retrieve the most relevant chunks from Pinecone.
8. Pass the retrieved context to an LLM (Gemini, GPT, Claude, etc.) for answer generation.

---

# What is RAG?

RAG stands for **Retrieval-Augmented Generation**.

Traditional LLMs answer only from their training data.

Problem:
- Cannot access your private documents.
- May hallucinate.
- Cannot answer document-specific questions accurately.

RAG solves this by:

1. Retrieving relevant information from your documents.
2. Supplying that information as context to the LLM.
3. Generating answers based on retrieved data.

---

# Why RAG?

### Without RAG

User:
> How was the internship experience?

LLM:
- May guess.
- May hallucinate.
- Doesn't know your PDF content.

### With RAG

User:
> How was the internship experience?

System:

1. Search relevant text inside PDF.
2. Fetch related chunks.
3. Send those chunks to LLM.
4. LLM answers using actual document data.

Result:
- More accurate
- Less hallucination
- Context-aware responses

---

# Complete Architecture

## Document Ingestion Flow

```text
PDF
 │
 ▼
PDF Parser
 │
 ▼
Extracted Text
 │
 ▼
Text Splitter
 │
 ▼
Chunks
 │
 ▼
Mistral Embeddings
 │
 ▼
Vector Embeddings
 │
 ▼
Pinecone Vector Database
```

---

## Query Flow

```text
User Question
 │
 ▼
Mistral Embedding
 │
 ▼
Pinecone Search
 │
 ▼
Top Matching Chunks
 │
 ▼
LLM (Gemini/GPT/Claude)
 │
 ▼
Final Answer
```

---

# Important Concepts

---

## 1. PDF Parsing

A PDF cannot be directly understood by an AI model.

We first extract the text from the PDF.

Example:

PDF Content:

```text
My internship at Google was an amazing learning experience.
```

After parsing:

```text
"My internship at Google was an amazing learning experience."
```

---

## 2. Chunking

Large documents cannot be embedded as a single block.

Therefore we split them into smaller pieces called chunks.

Example:

```text
Chunk 1:
My internship at Google was amazing.

Chunk 2:
I worked on backend development.

Chunk 3:
The team was supportive.
```

---

### Why Chunking?

Benefits:

- Better retrieval
- Lower cost
- Faster search
- Better context matching

---

## 3. Embeddings

Embeddings are numerical representations of text.

Example:

```text
"Internship Experience"

↓

[0.23, -0.56, 0.78, 0.11, ...]
```

AI converts words into vectors.

Similar meanings produce similar vectors.

Example:

```text
Internship Experience
Summer Internship
Work Experience
```

All produce embeddings that are close together in vector space.

---

## 4. Vector Database

Normal databases store:

```text
Name
Age
Email
```

Vector databases store:

```text
[0.123, 0.456, 0.789 ...]
```

These vectors are embeddings.

Popular Vector Databases:

- Pinecone
- Weaviate
- ChromaDB
- Milvus
- Qdrant

This project uses:

**Pinecone**

---

## 5. Similarity Search

Suppose we have:

```text
Chunk A:
Internship experience at Google.

Chunk B:
Football tournament results.

Chunk C:
Backend development project.
```

User asks:

```text
How was the internship experience?
```

Query embedding is generated.

Pinecone compares vectors and returns:

```text
Chunk A
```

because it is most similar.

---

# Advantages of RAG

### Reduces Hallucinations

The model answers from real data.

### Up-to-date Knowledge

New PDFs can be added anytime.

### Uses Private Data

Can answer from:

- PDFs
- Company Documents
- Research Papers
- Policies
- Notes

### Better Accuracy

Responses are grounded in actual content.

---

# Technologies Used

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime |
| LangChain | Chunking & AI Utilities |
| PDF Parse | Extract text from PDF |
| Mistral AI | Generate embeddings |
| Pinecone | Store vectors |
| Dotenv | Manage API keys |

---

# Code Explanation

---

# Function: Environment Configuration

```javascript
import dotenv from 'dotenv';
dotenv.config();
```

### Explanation

Loads environment variables from `.env` file.

Used for storing:

```env
MISTRAL_API_KEY=
PINECONE_API_KEY=
```

Benefits:

- Security
- No hardcoded keys

---

# Function: Pinecone Initialization

```javascript
const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY
});

const index = pc.index("cohort-rag");
```

### Explanation

Creates a connection with Pinecone.

Steps:

1. Authenticate using API key.
2. Connect to index named:

```text
cohort-rag
```

This index stores all vector embeddings.

---

# Function: Mistral Embedding Model Initialization

```javascript
const embeddings = new MistralAIEmbeddings({
    apiKey: process.env.MISTRAL_API_KEY,
    model: "mistral-embed"
});
```

### Explanation

Initializes Mistral Embedding Model.

Purpose:

Convert text into vectors.

Example:

```text
"Hello World"
```

↓

```text
[0.12, 0.43, 0.77 ...]
```

---

### Important Note

```text
mistral-embed = 1024 dimensions
```

Therefore Pinecone index must also be created with:

```text
Dimension = 1024
```

Otherwise insertion will fail.

---

# Function: Reading PDF File

```javascript
let dataBuffer = fs.readFileSync('./story.pdf');
```

### Explanation

Reads PDF file from local system.

Output:

```javascript
Buffer Data
```

which is later passed to parser.

---

# Function: PDF Parsing

```javascript
const parser = new PDFParse({
    data: dataBuffer
});

const data = await parser.getText();
```

### Explanation

Extracts text from PDF.

Input:

```text
PDF File
```

Output:

```text
Plain Text
```

Example:

```text
Internship experience...
```

---

# Function: Text Splitting

```javascript
const splitter =
new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 0
});
```

### Explanation

Splits large text into chunks.

Parameters:

### chunkSize

```javascript
500
```

Each chunk contains approximately 500 characters.

### chunkOverlap

```javascript
0
```

No repeated text between chunks.

---

## Splitting Text

```javascript
const chunks =
await splitter.splitText(data.text);
```

### Explanation

Converts document into chunk array.

Example:

```javascript
[
 "Chunk 1",
 "Chunk 2",
 "Chunk 3"
]
```

---

# Function: Creating Embeddings

```javascript
const docs = await Promise.all(
chunks.map(async (chunk) => {
    const embedding =
    await embeddings.embedQuery(chunk);

    return {
        text: chunk,
        embedding
    };
})
);
```

### Explanation

For every chunk:

1. Send chunk to Mistral.
2. Generate embedding.
3. Store chunk text.
4. Store embedding vector.

Output:

```javascript
[
 {
   text: "...",
   embedding:[...]
 }
]
```

---

# Function: Storing Data in Pinecone

```javascript
await index.upsert({
 records: docs.map((doc, i) => ({
   id:`doc-${i}`,
   values:doc.embedding,
   metadata:{
      text:doc.text
   }
 }))
});
```

### Explanation

Uploads embeddings to Pinecone.

Each record contains:

```javascript
{
 id,
 vector,
 metadata
}
```

Metadata stores original chunk text.

This is very important because:

When Pinecone returns a match, we need the original text chunk.

---

## Stored Record Structure

```javascript
{
 id:"doc-1",

 values:[
   0.12,
   0.43,
   ...
 ],

 metadata:{
   text:"Internship experience..."
 }
}
```

---

# Query Phase

After storing data, we can search it.

---

# Function: Query Embedding

```javascript
const queryEmbedding =
await embeddings.embedQuery(
"how was the internship experience?"
);
```

### Explanation

Converts user question into vector.

Example:

```text
How was the internship experience?
```

↓

```text
[0.56,0.77,0.12...]
```

---

# Function: Similarity Search

```javascript
const result =
await index.query({
    vector: queryEmbedding,
    topK: 2,
    includeMetadata: true
});
```

### Explanation

Searches Pinecone for similar vectors.

Parameters:

### vector

Query embedding.

### topK

```javascript
2
```

Return top 2 most relevant chunks.

### includeMetadata

```javascript
true
```

Also return original chunk text.

---

## Example Output

```javascript
{
 matches:[
  {
   score:0.95,
   metadata:{
     text:
     "My internship was amazing..."
   }
  }
 ]
}
```

---

# Final Step (Missing in Current Code)

Currently code only retrieves chunks.

A complete RAG system should also:

```text
Retrieved Chunks
        +
User Question
        ↓
Gemini / GPT / Claude
        ↓
Final Answer
```

Example:

```javascript
const prompt = `
Context:
${retrievedText}

Question:
${question}
`;
```

Send this prompt to Gemini/GPT and generate final response.

---

# Important Improvements (Not Present in Current Code)

## 1. Chunk Overlap

Current:

```javascript
chunkOverlap: 0
```

Recommended:

```javascript
chunkOverlap: 50
```

Reason:

Maintains context across chunks.

---

## 2. Use embedDocuments()

Instead of:

```javascript
embedQuery(chunk)
```

Better:

```javascript
embedDocuments()
```

Reason:

Document embeddings and query embeddings are optimized differently.

---

## 3. Add Namespaces

Useful when storing multiple PDFs.

Example:

```javascript
student-docs
research-papers
contracts
```

---

## 4. Store Additional Metadata

Example:

```javascript
metadata:{
  text,
  page,
  source
}
```

Helpful during retrieval.

---

## 5. Reranking

After Pinecone retrieval:

```text
Top 20 chunks
      ↓
Reranker
      ↓
Top 5 chunks
```

Improves answer quality.

---

# Interview Questions

### Why use embeddings?

To convert text into vectors for semantic search.

---

### Why use Pinecone?

Efficient storage and retrieval of vector embeddings.

---

### Why chunk documents?

Large documents cannot be searched effectively as a single block.

---

### What is similarity search?

Finding vectors closest to the query vector.

---

### Why RAG?

To provide accurate, document-based answers and reduce hallucinations.

---

# One-Line Summary

This project implements a complete RAG ingestion and retrieval pipeline where PDF text is parsed, split into chunks, converted into Mistral embeddings, stored in Pinecone, and later retrieved using semantic similarity search to provide relevant context for an LLM to generate accurate answers.