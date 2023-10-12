import mongoose from 'mongose'
const { Schema } = mongoose

const noteSchema = new Schema({
  
  noteTitle: String,
  noteDescription: String,
  priority: ['HIGH', 'MEDIUM', 'LOW'],
  dateAdded: Date,
  dateUpdated: Date

})

const Note = mongoose.model('Note', noteSchema)
