import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const ParPage = () => {

    const { armNum } = useParams()
    const navigate = useNavigate()

    const [par, setPar] = useState({
        name: '',
        armNum: '',
        swim: '',
        rsr: '',
    })

    useEffect (() =>{
        getPar()
    }, [armNum])
    
    let getPar = async () => {
        if(armNum == 'new') return 
        let response = await fetch(`/api/pars/${armNum}`)
        let data = await response.json()
        setPar(data)
    }

    const handleChange = (name, value) => {
        setPar((prevPar) => ({ ...prevPar, [name]: value }));
    }


   

    let createPar = async () => {
        fetch(`/api/pars/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(par)
        })
    }

    // call to backend and update
    let updatePar = async () => {
        fetch(`/api/pars/${armNum}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(par)
        })
    }

    let deletePar = async ()=> {
        fetch(`/api/pars/${armNum}/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        navigate('/')
    }

    let handleSubmit = () => {
        // console.log('NOTE:', note)
        if (armNum === 'new' && (par.name === '' || par.armNum === '')) {
            deletePar();
        } else if (armNum !== 'new') {
            updatePar();
        } else if (armNum === 'new' && par.name !== null && par.armNum !== null) {
            createPar();
        }
        //updatePar()
        navigate('/'); // Use navigate instead of history.push
    };



  return (
    <div className="note">
        <div className="note-header">
            <h3>     
                {/* <img src={ArrowLeft} alt="Arrow Left" /> */}
                <svg 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="#f68657" 
                width="32" 
                height="32" 
                viewBox="0 0 32 32"
                onClick={handleSubmit}>
                <title>chevron-left</title>
                <path d="M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"></path>
                </svg>
            </h3>
            {armNum !== 'new' ? (
                <button onClick={deletePar}>Delete</button>
            ):(
                <button onClick={handleSubmit}>Submit</button>
            )}
            
            {/* <button onClick={deletePar}>Delete</button> */}
        </div>
        <h1><span>Arm number {armNum}</span> - {par?.name}</h1>
        
        {/* Input Box 1 */}
        <input onChange={(e) => { handleChange("name", e.target.value) }} value={par?.name || ''}
        type="text" placeholder="Name" name="name" />

        {/* Input Box 2 */}
        <input onChange={(e) => { handleChange("armNum",e.target.value) }} value={par?.armNum || ''}
        type="text" placeholder="Arm Number" name="armNum"/>

        {/* Input Box 3 */}
        <input onChange={(e) => { handleChange("swimTime",e.target.value) }} value={par?.swimTime || ''}
        type="text" placeholder="Swim" name="swim"/>

        {/* Input Box 3 */}
        <input onChange={(e) => { handleChange("rsrTime", e.target.value) }} value={par?.rsrTime || ''}
        type="text" placeholder="RSR" name="rsr"/>
    
    </div>
  )
}

export default ParPage