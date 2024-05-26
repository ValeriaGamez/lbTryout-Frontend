import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem.jsx';
import AddButton from '../components/AddButton';

const ParsListPage = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    let [pars, setPars] = useState([])

    useEffect(()=> {
        getPars()

    }, [])

    let getPars = async () => {
        console.log('apiUrl:', apiUrl)
        let response = await fetch(`${apiUrl}/api/pars/`)
        let data = await response.json()
        console.log('data', data)
        setPars(data);
        
    } 

  return (
    <div className="notes">
        <div className="notes-header">
            <h2 className="notes-title">&#9782; Participant List</h2>
            <p className="notes-count">{pars.length}</p>
        </div>

        <div className="notes-list">
            {pars.map((par, index) => (
                <ListItem key={index} par={par} />
            ))}
        </div>
        
        <AddButton /> 
        
    </div> 

  )
}

export default ParsListPage