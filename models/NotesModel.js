const mongoose = require('mongoose')
const { Schema } = mongoose
export {Note}

const noteSchema = new Schema({
  
  noteTitle: String,
  noteDescription: String,
  priority: ['HIGH', 'MEDIUM', 'LOW'],
  dateAdded: Date,
  dateUpdated: Date

})

const Note = mongoose.model('Note', noteSchema)

