import React from 'react';
import { Link } from "react-router-dom";
import { useAppContext } from "../context/Context";

const Header = () => {

    const {setShowModal, notes} = useAppContext();
    
    return (
        <div className='header container d-flex align-items-center'>
            <h2>My Notes</h2>
            <button onClick={()=> setShowModal(true) } className='btn btn-primary btn-sm m-2'>Create Note</button>
            <Link to={'/archived'}>
                <button className='btn btn-primary btn-sm m-2'>Archived Notes</button>
            </Link>
        </div>
    );
}

export default Header;
