const Note = require("../model/note.model")
module.exports.getNoteService = async(data)=>{
    return await Note.find({})
}
module.exports.postNoteService = async(data)=>{
    return await Note.create(data)
}