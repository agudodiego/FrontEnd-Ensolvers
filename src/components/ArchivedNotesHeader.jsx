import React from 'react';
import { Link } from "react-router-dom";

const ArchivedNotesHeader = () => {
    return (
        <div className='header container d-flex align-items-center'>
            <h2>Archived Notes</h2>
            <Link to={'/'}>
                <button className='btn btn-primary btn-sm m-2'>Go Back</button>
            </Link>
        </div>
    );
}

export default ArchivedNotesHeader;
