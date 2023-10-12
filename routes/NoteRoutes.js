const noteModel = require('../models/Notes.js');

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', (req, res) => {

  // Validate request
  if(!req.body.content) {
      return res.status(400).send({
          message: "Note content can not be empty"
      });
  } 
  else {
    try {
      const kitty = new noteModel.Kitten({
        noteTitle: req.body.noteTitle.toString(),
        noteDescription: req.body.noteDescription.toString(),
        priority: [req.body.priority.toString()],
        dateAdded: Date.now(),
        dateUpdated: 0
      })
      kitty.save().then(() => {
        res.status(201).send()
      })
    }
    catch (e) {
      return res.status(400).send({
        message: "Invalid note contents recieved`"
      })
    }
  }

});


//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    //TODO - Write your code here to returns all note
});


//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    //TODO - Write your code here to return onlt one note using noteid
});


//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    //TODO - Write your code here to update the note using noteid
});


//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    //TODO - Write your code here to delete the note using noteid

});
