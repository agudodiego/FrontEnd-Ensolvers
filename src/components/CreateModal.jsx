import React, { useState, useEffect } from 'react';

import { useAppContext } from "../context/Context";

const CreateModal = () => {

    const { setShowModal, saveNote, filterNotArchivedNotes, filterArchivedNotes, modifyingNote, setModifyingNote, updateNote } = useAppContext();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const placeDate = ()=> {
        const date = new Date();
        return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
    }

    const createNote = async (e) => {
        e.preventDefault();
        const note = {
            title,
            content,
            archived: false,
            date: placeDate()
        }
        await saveNote(note);
        await filterNotArchivedNotes();
        setShowModal(false)
    }

    const editNote = async (e) => {
        e.preventDefault();
        const note = {
            id: modifyingNote.id,
            title,
            content,
            archived: modifyingNote.archived,
            date: placeDate()
        }
        await updateNote(note);
        modifyingNote.archived ? await filterArchivedNotes() : await filterNotArchivedNotes();
        setModifyingNote(null);
        setShowModal(false)
    }

    const creatEdit = (e) => {
        e.preventDefault();
        modifyingNote != null ? editNote(e) : createNote(e);
    }

    const cancel = () => {
        setModifyingNote(null);
        setShowModal(false)
    }

    useEffect(() => {
        if (modifyingNote != null) {
            setTitle(modifyingNote.title);
            setContent(modifyingNote.content)
        }
    }, []);

    return (
        <div className='createModal text-center p-3'>
            <h3>Save or Edit Note</h3>
            <form onSubmit={(e) => creatEdit(e)}>
                <div className='row d-flex justify-content-center align-items-center'>
                    <label className='col-sm-1' htmlFor="title">Title</label>
                    <input id='title' value={title} onChange={(e) => setTitle(e.target.value)} className='col-sm-8 rounded-2 m-2' type="text" />
                </div>
                <div className='row d-flex justify-content-center align-items-center'>
                    <label className='col-sm-1' htmlFor="content">Content</label>
                    <textarea id='content' value={content} onChange={(e) => setContent(e.target.value)} className='col-sm-8 rounded-2 m-2' type="textarea" />
                </div>
                <div>
                    <button type="submit" className='btn btn-dark m-2'>Save/Edit</button>
                    <button className='btn btn-dark m-2' onClick={cancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default CreateModal;
