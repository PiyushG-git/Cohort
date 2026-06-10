# AI Agent using LangChain + Mistral AI + Custom Email Tool

## Overview

This project demonstrates how to build an **AI Agent** using:

- Mistral AI LLM
- LangChain
- Custom Tools
- Zod Validation
- Node.js

The agent can:

1. Chat with users.
2. Understand user requests.
3. Decide whether a tool is required.
4. Automatically call the appropriate tool.
5. Return the final response.

In this project, the tool is:

```text
Email Sending Tool
```

So the AI can perform actions like:

```text
Send an email to john@gmail.com saying the meeting is at 5 PM.
```

Instead of simply replying with text, the AI can actually send the email.

---

# What is an LLM?

LLM stands for:

```text
Large Language Model
```

Examples:

- ChatGPT
- Claude
- Gemini
- Mistral
- Llama

An LLM is trained on massive amounts of text and can:

- Answer questions
- Generate content
- Summarize text
- Translate languages
- Write code
- Reason about information

---

## Problem with Normal LLMs

Suppose you ask:

```text
Send an email to my manager.
```

The LLM can generate:

```text
Sure, I have drafted the email.
```

But it cannot actually send the email.

Because LLMs can only generate text.

They cannot:

- Send Emails
- Access Databases
- Call APIs
- Book Flights
- Update CRM Systems

on their own.

---

# What is an AI Agent?

An Agent is:

```text
LLM
+
Tools
+
Decision Making
```

The agent can:

1. Understand the request.
2. Decide which tool is needed.
3. Execute the tool.
4. Return the result.

---

## Agent Architecture

```text
User
 │
 ▼
AI Agent
 │
 ├── LLM Brain
 │
 └── Tools
       │
       ├── Email Tool
       ├── Database Tool
       ├── Weather Tool
       └── API Tool
```

---

# What is LangChain?

LangChain is a framework used to build:

- AI Agents
- Chatbots
- RAG Systems
- Multi-Agent Systems
- Tool Calling Applications

It provides:

- LLM Integrations
- Tool Calling
- Memory
- Agents
- Chains
- Prompt Templates
- Retrieval Systems

---

## Why LangChain?

Without LangChain:

```text
User Input
 ↓
LLM
 ↓
Manual Tool Logic
 ↓
Output
```

You have to write all logic yourself.

With LangChain:

```text
User Input
 ↓
Agent
 ↓
Tool Selection
 ↓
Tool Execution
 ↓
Response
```

Everything becomes easier.

---

# What is Tool Calling?

Tool Calling means:

The LLM can decide:

```text
"I need to use a tool."
```

and then execute that tool automatically.

Example:

User:

```text
Send an email to hr@company.com
```

Agent thinks:

```text
Email sending is required.
```

Then:

```text
Call emailTool()
```

Finally:

```text
Email Sent Successfully
```

---

# Complete Flow

```text
User Input
      │
      ▼
Agent
      │
      ▼
Mistral LLM
      │
      ▼
Should I use a Tool?
      │
 ┌────┴────┐
 │         │
No        Yes
 │         │
 ▼         ▼
Reply    Execute Tool
 │         │
 └────┬────┘
      ▼
Final Response
```

---

# Technologies Used

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime |
| LangChain | Agent Framework |
| Mistral AI | LLM |
| Zod | Input Validation |
| Readline | CLI Chat Interface |
| Custom Tool | Send Email |

---

# Important Concepts

---

# 1. LLM (Large Language Model)

The brain of the application.

In this project:

```javascript
ChatMistralAI
```

is the LLM.

Responsibilities:

- Understand user messages
- Generate responses
- Decide when tools should be called

---

# 2. Tool

A tool is simply a JavaScript function that the AI can use.

Example:

```javascript
sendEmail()
```

Normal JavaScript:

```javascript
sendEmail(...)
```

Agent Version:

```javascript
emailTool(...)
```

Now the AI can call it automatically.

---

# 3. Zod

Zod is a validation library.

It ensures AI generates data in the correct format.

Without Zod:

```json
{
  "email":"abc@gmail.com"
}
```

Maybe AI returns wrong structure.

With Zod:

```json
{
  "to":"abc@gmail.com",
  "subject":"Meeting",
  "html":"Hello"
}
```

Guaranteed structure.

---

# 4. Memory

The messages array acts as conversation memory.

It stores:

```text
User Message
AI Response
User Message
AI Response
```

This allows the AI to remember previous context.

---

# Project Architecture

```text
User
 │
 ▼
Readline Interface
 │
 ▼
Messages Array
 │
 ▼
LangChain Agent
 │
 ▼
Mistral AI
 │
 ▼
Email Tool (if needed)
 │
 ▼
Final Response
```

---

# Code Explanation

---

# Function: Environment Configuration

```javascript
import "dotenv/config";
```

### Explanation

Loads environment variables.

Example:

```env
MISTRAL_API_KEY=xxxxxxxx
```

Used to securely access Mistral API.

---

# Function: Import Required Modules

```javascript
import readline from "readline";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage, tool, createAgent } from "langchain";
import { sendEmail } from "./mail.service.js";
import * as z from "zod";
```

### Explanation

Imports all required libraries.

---

### readline

Used to create terminal chat.

Example:

```text
You:
```

---

### ChatMistralAI

Connects LangChain to Mistral LLM.

---

### HumanMessage

Represents user messages.

---

### tool

Converts a normal function into an AI Tool.

---

### createAgent

Creates the AI Agent.

---

### sendEmail

Custom email sending function.

---

### zod

Used for validation.

---

# Function: Creating Email Tool

```javascript
const emailTool = tool(
  sendEmail,
  {
    name:"emailTool",
    description:"Use this tool to send an email",
    schema:z.object({
      to:z.string(),
      html:z.string(),
      subject:z.string()
    })
  }
)
```

---

## Explanation

Converts:

```javascript
sendEmail()
```

into

```javascript
emailTool()
```

which can be used by the AI.

---

### Tool Name

```javascript
name:"emailTool"
```

How the agent identifies the tool.

---

### Description

```javascript
description:
"Use this tool to send an email"
```

Helps the LLM understand:

```text
When should this tool be used?
```

Very important.

Bad descriptions lead to bad tool usage.

---

### Schema

```javascript
schema:z.object(...)
```

Defines expected inputs.

Required:

```javascript
{
 to,
 html,
 subject
}
```

---

## Example Tool Input

```json
{
 "to":"john@gmail.com",
 "subject":"Meeting",
 "html":"Meeting at 5 PM"
}
```

---

# Function: Creating Readline Interface

```javascript
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

### Explanation

Creates a command-line chat interface.

Example:

```text
You:
```

---

# Function: Creating Mistral Model

```javascript
const model = new ChatMistralAI({
  model:"mistral-small-latest",
  apiKey:process.env.MISTRAL_API_KEY
});
```

### Explanation

Initializes the Mistral LLM.

Model Used:

```text
mistral-small-latest
```

This model acts as the reasoning engine.

---

# Function: Creating Agent

```javascript
const agent = createAgent({
  model,
  tools:[emailTool]
});
```

### Explanation

Creates an AI Agent.

Components:

```text
Agent
 ├── Mistral LLM
 └── Email Tool
```

Now the agent can:

- Chat normally
- Use email tool when necessary

---

# Function: Conversation Memory

```javascript
const messages = [];
```

### Explanation

Stores conversation history.

Example:

```javascript
[
 HumanMessage,
 AIMessage,
 HumanMessage,
 AIMessage
]
```

This gives context to future responses.

---

# Function: askQuestion()

```javascript
function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}
```

### Explanation

Converts readline into an async function.

Allows usage of:

```javascript
await askQuestion(...)
```

instead of callbacks.

---

# Function: Infinite Chat Loop

```javascript
while(true)
```

### Explanation

Keeps chat running continuously.

Flow:

```text
User Input
      ↓
Agent
      ↓
Response
      ↓
Repeat
```

until user exits.

---

# Function: Exit Handling

```javascript
if(userInput.toLowerCase()==="exit")
```

### Explanation

Stops chat when user types:

```text
exit
```

---

# Function: Store User Message

```javascript
messages.push(
  new HumanMessage(userInput)
)
```

### Explanation

Converts user text into LangChain message format.

Example:

```javascript
HumanMessage("Hello")
```

and stores it.

---

# Function: Agent Invocation

```javascript
const response =
await agent.invoke({
  messages
});
```

### Explanation

This is the most important step.

The agent receives:

```javascript
{
 messages
}
```

Agent then:

1. Reads conversation history.
2. Understands intent.
3. Decides if tool is required.
4. Calls tool if needed.
5. Generates response.

---

## Internal Flow

```text
User Message
      │
      ▼
Agent
      │
      ▼
Mistral LLM
      │
      ▼
Need Tool?
      │
 ┌────┴────┐
 │         │
No        Yes
 │         │
 ▼         ▼
Reply   Email Tool
 │         │
 └────┬────┘
      ▼
Response
```

---

# Function: Save AI Response

```javascript
messages.push(
 response.messages[
   response.messages.length-1
 ]
)
```

### Explanation

Stores latest AI response.

Maintains conversation memory.

---

# Function: Print Response

```javascript
console.log(
 response.messages[
   response.messages.length-1
 ].text
);
```

### Explanation

Displays final AI response in terminal.

Example:

```text
Email sent successfully.
```

or

```text
Hello! How can I help you?
```

---

# Example Execution

User:

```text
Send an email to abc@gmail.com saying meeting is at 5 PM
```

Agent Process:

```text
1. Understand request
2. Detect email action
3. Use emailTool
4. Generate parameters
5. Call sendEmail()
6. Return result
```

Output:

```text
Email sent successfully.
```

---

# What Happens Internally?

```text
User Input
      │
      ▼
HumanMessage
      │
      ▼
Agent
      │
      ▼
Mistral AI
      │
      ▼
Tool Selection
      │
      ▼
emailTool
      │
      ▼
sendEmail()
      │
      ▼
Tool Result
      │
      ▼
Agent Response
      │
      ▼
Terminal Output
```

---

# Important Improvements (Missing in Current Code)

## 1. Add System Prompt

Currently:

```javascript
createAgent(...)
```

has no instructions.

Recommended:

```text
You are an email assistant.
```

This improves consistency.

---

## 2. Add Error Handling

Current code:

```javascript
await agent.invoke(...)
```

If tool fails:

```text
Application crashes
```

Use:

```javascript
try-catch
```

---

## 3. Store Chat History in Database

Current:

```javascript
messages=[]
```

Lost after restart.

Store in:

- MongoDB
- PostgreSQL
- Redis

---

## 4. Multiple Tools

Current:

```javascript
[emailTool]
```

Can extend:

```javascript
[
 emailTool,
 weatherTool,
 calendarTool,
 databaseTool
]
```

---

## 5. Logging

Store:

```text
User Query
Tool Used
Result
Timestamp
```

Useful for debugging.

---

# Frequently Asked Interview Questions

### What is an Agent?

An AI system that can reason and use tools to perform actions.

---

### What is Tool Calling?

Allowing an LLM to invoke external functions when required.

---

### Why use Zod?

To validate and enforce structured inputs generated by the AI.

---

### What is LangChain?

A framework for building LLM applications, agents, RAG systems, and tool-calling workflows.

---

### Difference Between LLM and Agent?

LLM:

```text
Can generate text only.
```

Agent:

```text
Can generate text
+
Use tools
+
Take actions
```

---

### Why use Memory?

To maintain context across conversations.

---

# One-Line Summary

This project builds an AI Agent using LangChain and Mistral AI that can understand user requests, maintain conversation history, automatically decide when an email needs to be sent, invoke a custom email tool with validated inputs using Zod, and return the final result to the user.