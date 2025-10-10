const noteModel = require('../models/NotesModel');
const express = require('express');
const noteRoutes = express.Router();

const allowedPriorities = ['HIGH', 'MEDIUM', 'LOW'];

//Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
noteRoutes.post('/notes', async (req, res) => {
    try {
        const { noteTitle, noteDescription, priority } = req.body;

        // Validate input fields
        if (!noteTitle || !noteDescription || !priority) {
            return res.status(400).send({
                message: "noteTitle, noteDescription, and priority are required"
            });
        }

        // Validate priority
        const allowedPriorities = ['HIGH', 'MEDIUM', 'LOW'];
        if (!allowedPriorities.includes(priority)) {
            return res.status(400).send({
                message: "Priority must be HIGH, MEDIUM, or LOW"
            });
        }

        // Create new note
        const newNote = await noteModel.create({
            noteTitle,
            noteDescription,
            priority,
            dateAdded: new Date(),
            dateUpdated: null
        });

        return res.status(201).json(newNote); // 201 for "Created"
    } catch (error) {
        return res.status(500).send({
            message: "Error creating new note",
            error: error.message
        });
    }
});

//Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await noteModel.find({});
        return res.status(200).json(notes);
    } catch (error) {
        return res.status(500).send({
            message: "Error retrieving notes",
            error: error.message
        });
    }
});

//Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        const noteId = req.params.noteId;

        const note = await noteModel.findById(noteId);

        if (!note) {
            return res.status(404).send({
                message: `Note not found with ID: ${noteId}`
            });
        }

        return res.status(200).json(note);
    } catch (error) {
        return res.status(500).send({
            message: `Error retrieving note with id ${req.params.noteId}`,
            error: error.message
        });
    }
});

//Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put('/notes/:noteId', async (req, res) => {
    try {
        const noteId = req.params.noteId;
        const { noteTitle, noteDescription, priority } = req.body;


        if (!priority || !allowedPriorities.includes(priority)) {
            return res.status(400).send({
                message: "Priority must be HIGH, MEDIUM, or LOW"
            });
        }


        const updateData = {
            ...(noteTitle && { noteTitle }),
            ...(noteDescription && { noteDescription }),
            priority,
            dateUpdated: new Date()
        };

        const updatedNote = await noteModel.findByIdAndUpdate(
            noteId,
            updateData,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedNote) {
            return res.status(404).send({
                message: "Note not found with that ID"
            });
        }

        return res.status(200).json(updatedNote);

    } catch (error) {
        return res.status(500).send({
            message: "Server error while updating note",
            error: error.message
        });
    }
});

//Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    try {
        const noteId = req.params.noteId;

        const deletedNote = await noteModel.findByIdAndDelete(noteId);

        if (!deletedNote) {
            return res.status(404).send({
                message: `Note not found with ID: ${noteId}`
            });
        }

        return res.status(200).send({
            message: "Note deleted successfully",
            note: deletedNote
        });
    } catch (error) {
        return res.status(500).send({
            message: "Error deleting note",
            error: error.message
        });
    }
});

module.exports = noteRoutes;
