import React from 'react';
import NotesHeader from "../components/NotesHeader";
import NotesList from "../components/NotesList";

const NotesPage = ({showModal, setShowModal}) => {

    return (
        <div>
            <NotesHeader />
            <NotesList archived={false}/>
        </div>
    );
}

export default NotesPage;
