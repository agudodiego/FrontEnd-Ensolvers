import React from 'react';
import { MdDescription, MdEdit, MdDeleteForever, MdArchive, MdUnarchive } from "react-icons/md";
import { useAppContext } from "../context/Context";

const NoteCard = ({ note }) => {

    const { setNoteToDelete, filterNotArchivedNotes, filterArchivedNotes, updateNote, setShowModal, setModifyingNote, setShowDeleteModal} = useAppContext();

    const changeArchState = async ()=> {
        const newNote = {...note, archived: !note.archived}
        await updateNote(newNote);
        note.archived ? filterArchivedNotes() : filterNotArchivedNotes();
    }

    const editNote = ()=> {
        setShowModal(true);
        setModifyingNote(note)
    }

    const deleteNote = ()=> {
        setShowDeleteModal(true);
        setNoteToDelete(note);
    }

    return (
        <div className='col-sm-5 bg-light m-1 p-2 border border-secondary rounded d-flex justify-content-between'>
            <div className='d-flex'>
                <MdDescription size={50} />
                <div>
                    <h4 className='mb-0'>{note.title}</h4>
                    <p className='m-0'>Last edited: {note.date}</p>
                </div>
            </div>
            <div className=''>
                {note.archived ? <MdUnarchive onClick={changeArchState} size={30} cursor={'pointer'} /> : <MdArchive onClick={changeArchState} size={30} cursor={'pointer'}/>}
                <MdEdit onClick={editNote} size={30} cursor={'pointer'} />
                <MdDeleteForever onClick={deleteNote} size={30} color={'tomato'} cursor={'pointer'}/>
            </div>
        </div>
    );
}

export default NoteCard;
