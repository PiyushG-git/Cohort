import { generateResponse, generateChatTitle } from "../services/ai.service.js";
import chatModel from "../models/chat.model.js";
import messageModel from "../models/message.model.js";

export async function sendMessage(req, res) {
    try {
        const { message, chat: chatId } = req.body;

        if (!message) {
            return res.status(400).json({
                message: "Message is required"
            });
        }

        let title = null;
        let chat = null;

        // Create new chat if no chatId
        if (!chatId) {
            title = await generateChatTitle(message);

            chat = await chatModel.create({
                user: req.user.id,
                title
            });
        } else {
            chat = await chatModel.findOne({
                _id: chatId,
                user: req.user.id
            });

            if (!chat) {
                return res.status(404).json({
                    message: "Chat not found"
                });
            }
        }

        const currentChatId = chatId || chat._id;

        // Save user message
        await messageModel.create({
            chat: currentChatId,
            content: message,
            role: "user"
        });

        // Fetch full chat history
        const messages = await messageModel
            .find({ chat: currentChatId })
            .sort({ createdAt: 1 });

        // Generate AI response
        const result = await generateResponse(messages);

        // Save AI response
        const aiMessage = await messageModel.create({
            chat: currentChatId,
            content: result,
            role: "ai"
        });

        res.status(201).json({
            title: chat.title,
            chat,
            aiMessage
        });

    } catch (error) {
        console.error("sendMessage Error:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

export async function getChats(req, res) {
    try {
        const chats = await chatModel.find({ user: req.user.id }).sort({ updatedAt: -1 });

        res.status(200).json({
            message: "Chats retrieved successfully",
            chats
        });
    } catch (error) {
        console.error("getChats Error:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

export async function getMessages(req, res) {
    try {
        const { chatId } = req.params;

        const chat = await chatModel.findOne({
            _id: chatId,
            user: req.user.id
        });

        if (!chat) {
            return res.status(404).json({
                message: "Chat not found"
            });
        }

        const messages = await messageModel
            .find({ chat: chatId })
            .sort({ createdAt: 1 });

        res.status(200).json({
            message: "Messages retrieved successfully",
            messages
        });
    } catch (error) {
        console.error("getMessages Error:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

export async function deleteChat(req, res) {
    try {
        const { chatId } = req.params;

        const chat = await chatModel.findOneAndDelete({
            _id: chatId,
            user: req.user.id
        });

        if (!chat) {
            return res.status(404).json({
                message: "Chat not found"
            });
        }

        await messageModel.deleteMany({ chat: chatId });

        res.status(200).json({
            message: "Chat deleted successfully"
        });
    } catch (error) {
        console.error("deleteChat Error:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

