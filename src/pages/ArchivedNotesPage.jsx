import React from 'react';
import ArchivedNotesHeader from '../components/ArchivedNotesHeader';
import NotesList from "../components/NotesList";

const ArchivedNotesPage = () => {
    
    return (
        <div>
            <ArchivedNotesHeader/>
            <NotesList archived={true}/>
        </div>
    );
}

export default ArchivedNotesPage;
