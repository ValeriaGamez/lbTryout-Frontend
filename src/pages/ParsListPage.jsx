import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem.jsx';
import AddButton from '../components/AddButton';

const ParsListPage = () => {

    let [pars, setPars] = useState([])

    useEffect(()=> {
        getPars()

    }, [])

    let getPars = async () => {
        let response = await fetch('/api/pars/')
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