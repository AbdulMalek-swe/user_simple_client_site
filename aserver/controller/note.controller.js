const { postNoteService, getNoteService } = require("../service/note.service")

module.exports.getNotes = async(req,res)=>{
    try {
        const results = await getNoteService(req.body)
          res.status(200).json({
             results
          })
    } catch (error) {
        
    }
}
module.exports.postNotes = async(req,res)=>{
    try {
        console.log(req.user);
        const results = await postNoteService(req.body)
          res.status(200).json({
            results
          })
    } catch (error) {
        
    }
}