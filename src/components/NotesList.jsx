import React, { useEffect } from 'react';
import NoteCard from "./NoteCard";
// import { getAllUsers } from "../service/axiosService";
import CreateModal from './CreateModal';
import { useAppContext } from "../context/Context";
import DeleteModal from './DeleteModal';

const NotesList = ({ archived }) => {

  const { showModal, notes, showDeleteModal, filterNotArchivedNotes, filterArchivedNotes } = useAppContext();

  const initialSetting = async () => {
    archived ? filterArchivedNotes() : filterNotArchivedNotes();
  }
  
  useEffect(() => {
    initialSetting();
  }, []);

  return (
    <div className='container d-flex flex-wrap justify-content-between'>
      {
        notes?.map((note) => {
          return (
            <NoteCard key={note.id} note={note} />
          )
        }
        )
      }
      {showModal ? <CreateModal /> : null}
      {showDeleteModal ? <DeleteModal /> : null}
    </div>
  );
}

export default NotesList;
