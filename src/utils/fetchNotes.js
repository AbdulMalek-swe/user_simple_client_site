import axios from "../apiService/axios"
import { noteData } from "../redux/feature/noteSlice"
import store from "../redux/store"

export const fetchNotes = async()=>{
    try {
        const result = await axios.get("/notes")
      
        store.dispatch(noteData.fetchNote(result.data.results))
    } catch (error) {
        
    }
}