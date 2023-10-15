const express = require('express');
// import { Router } from "express";
const Notes = require('../models/NotesModel')
var router = express.Router()
export {router};

//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', async (req, res) => {

  // Validate request
  if(!req.body.content) {
      return res.status(400).send({
          message: "Note content can not be empty"
      });
  }

  if (req.body.noteTitle &&
      req.body.noteDescription &&
      req.body.priority ) {
    try {
        let note = await Notes.Note.create({
            noteTitle: req.body.noteTitle,
            noteDescription: req.body.noteDescription,
            priority: req.body.priority,
            dateAdded: Date.now(),
        });

        res.status(200).send()
    }
    catch (e) {
        res.status(500).send('pp smol')
    }

  }

});


//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', async (req, res) => {
    try {
        const notes = await Notes.Note.find({});
        res.status(200).send(notes);
    }
    catch (e) {
        res.status(500).send(e);
    }
});


//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', async (req, res) => {
    try {
        const note = await Notes.Note.findById(req.params.noteId).exec()
        res.status(200).send(note)
    }
    catch (e) {
        res.status(500).send(e)
    }
});


//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', async (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    } else if (!(req.body.noteTitle &&
               req.body.noteDescription &&
               req.body.priority)) {
        return res.status(400).send({
            message: "Please include object values"
        });
    }

    try {
        const note = await Notes.Note.findByIdAndUpdate(req.params.noteId, req.body).exec()
        res.status(200).send()
    }
    catch (e) {
        res.status(500).send(e)
    }
});


//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', async (req, res) => {
    try {
        const note = await Notes.Note.findByIdAndDelete(req.params.noteId).exec()
        res.status(200).send()
    }
    catch (e) {
        res.status(500).send(e)
    }
});