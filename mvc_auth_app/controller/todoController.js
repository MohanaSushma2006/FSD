import mongoose from "mongoose";
import Todo from "../model/todomodel.js";

// Create a Todo
export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !title.trim()) {
            return res.status(400).json({
                message: "Todo title is required"
            });
        }

        const todo = await Todo.create({
            title,
            description,
            user: req.user.id
        });

        res.status(201).json({
            message: "Todo created successfully",
            todo
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create Todo",
            error: error.message
        });
    }
};

// Get all Todos belonging to the logged-in user
export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({
            user: req.user.id
        }).sort({ createdAt: -1 });

        res.status(200).json({
            count: todos.length,
            todos
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch Todos",
            error: error.message
        });
    }
};

// Get one Todo by ID
export const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Invalid Todo ID"
            });
        }

        const todo = await Todo.findOne({
            _id: id,
            user: req.user.id
        });

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.status(200).json({ todo });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch Todo",
            error: error.message
        });
    }
};

// Update a Todo
export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Invalid Todo ID"
            });
        }

        const updates = {};

        if (title !== undefined) {
            if (typeof title !== "string" || !title.trim()) {
                return res.status(400).json({
                    message: "Title must be a non-empty string"
                });
            }

            updates.title = title.trim();
        }

        if (description !== undefined) {
            if (typeof description !== "string") {
                return res.status(400).json({
                    message: "Description must be a string"
                });
            }

            updates.description = description;
        }

        if (completed !== undefined) {
            if (typeof completed !== "boolean") {
                return res.status(400).json({
                    message: "Completed must be true or false"
                });
            }

            updates.completed = completed;
        }

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                message: "Provide at least one field to update"
            });
        }

        const todo = await Todo.findOneAndUpdate(
            {
                _id: id,
                user: req.user.id
            },
            updates,
            {
                new: true,
                runValidators: true
            }
        );

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.status(200).json({
            message: "Todo updated successfully",
            todo
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update Todo",
            error: error.message
        });
    }
};

// Delete a Todo
export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Invalid Todo ID"
            });
        }

        const todo = await Todo.findOneAndDelete({
            _id: id,
            user: req.user.id
        });

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.status(200).json({
            message: "Todo deleted successfully",
            todo
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete Todo",
            error: error.message
        });
    }
};