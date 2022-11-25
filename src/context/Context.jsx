import { useContext, createContext, useState, useMemo } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [notes, setNotes] = useState([]);
    const [modifyingNote, setModifyingNote] = useState(null);
    const [noteToDelete, setNoteToDelete] = useState(null);

    // ********** CRUD ******************
    const getAllNotes = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/notes');
            return response.data;
        } catch (error) {
            console.log('Error', error);
        }
    }

    const saveNote = async (note) => {
        try {
            const res = await axios.post('http://localhost:8080/api/notes', note)
        } catch (error) {
            console.log('Error', error);
        }
    }

    const deleteNote = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/notes/${id}`)
        } catch (error) {
            console.log('Error', error);
        }
    }

    const updateNote = async (note)=> {
        try {
            const res = await axios.post('http://localhost:8080/api/notes', note)
        } catch (error) {
            console.log('Error', error);
        }
    }

    // ********** FUNCTIONS *****************

    const filterNotArchivedNotes = async () => {
        const data = await getAllNotes();
        let filtered = data?.filter((note) => !note.archived);
        setNotes(filtered);
    }

    const filterArchivedNotes = async () => {
        const data = await getAllNotes();
        let filtered = data.filter((note) => note.archived);
        setNotes(filtered);
    }

    // ********** VALUE *****************
    const value = useMemo(() => ({
        showModal,
        notes,
        modifyingNote,
        showDeleteModal,
        noteToDelete,
        setNotes,
        setShowModal,
        getAllNotes,
        saveNote,
        filterNotArchivedNotes,
        filterArchivedNotes,
        deleteNote,
        updateNote,
        setModifyingNote,
        setShowDeleteModal,
        setNoteToDelete
    }), [showModal, notes, modifyingNote, showDeleteModal,noteToDelete])

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}