import React from 'react';
import { useAppContext } from "../context/Context";

const DeleteModal = () => {

    const {setNoteToDelete, noteToDelete, filterNotArchivedNotes, filterArchivedNotes, deleteNote, setShowDeleteModal} = useAppContext();

    const closeModal = ()=> {
        setShowDeleteModal(false);        
    }

    const removeNote = async ()=> {
        await deleteNote(noteToDelete.id);
        noteToDelete.archived ? filterArchivedNotes() : filterNotArchivedNotes();
        setNoteToDelete(null);
        setShowDeleteModal(false);
    }

    return (
        <div className='delModal'>
            <h3>Are you sure you want to delete this Note?</h3>
            <button className='btn btn-primary btn-sm m-2' onClick={removeNote} >Delete</button>
            <button className='btn btn-primary btn-sm m-2' onClick={closeModal}>Cancel</button>
        </div>
    );
}

export default DeleteModal;
