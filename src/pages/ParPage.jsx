import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ParPage = () => {

    const { armNum } = useParams()
    const navigate = useNavigate()

    const [par, setPar] = useState({
        name: '',
        armNum: '',
        swimTime: '',
        rsrTime: '',
    })

    const [submitted, setSubmitted] = useState(false);

    useEffect (() =>{
        getPar()
    }, [armNum])
    
    let getPar = async () => {
        if(armNum === 'new') return

        let response = await fetch(`/api/pars/${armNum}`)
        console.log("response:", response)

        let data = await response.json()
        setPar(data)
    }

    const handleChange = (name, value) => {
        if (!submitted) {
            setPar((prevPar) => ({ ...prevPar, [name]: value }));
        }
    }

    let createPar = async () => {
        await fetch(`/api/pars/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(par)
        })
        setSubmitted(true);
    }

    let updatePar = async () => {
        await fetch(`/api/pars/${armNum}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(par)
        })
        setSubmitted(true);
    }

    let deletePar = async ()=> {
        await fetch(`/api/pars/${armNum}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate('/')
    }

    let handleSubmit = () => {
        if (armNum === 'new' && (par.name === '' || par.armNum === '')) {
            deletePar();
        } else if (armNum !== 'new') {
            updatePar();
        } else if (armNum === 'new' && par.name !== '' && par.armNum !== '') {
            createPar();
        }
        navigate('/'); // Use navigate instead of history.push
    };

    return (
        <div className="note">
            <div className="note-header">
                <h3>
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
            </div>
            <h1><span>Arm number {armNum}</span> - {par?.name}</h1>
            
            {/* Input Box 1 */}
            <input 
                onChange={(e) => handleChange("name", e.target.value)}
                value={par?.name || ''}
                type="text" placeholder="Name" name="name" 
                disabled={submitted}
            />

            {/* Input Box 2 */}
            <input 
                onChange={(e) => handleChange("armNum", e.target.value)}
                value={par?.armNum || ''}
                type="text" placeholder="Arm Number" name="armNum"
                disabled={submitted}
            />

            {/* Input Box 3 */}
            <input 
                onChange={(e) => handleChange("swimTime", e.target.value)}
                value={par?.swimTime || ''}
                type="text" placeholder="Swim" name="swim"
                disabled={submitted}
            />

            {/* Input Box 4 */}
            <input 
                onChange={(e) => handleChange("rsrTime", e.target.value)}
                value={par?.rsrTime || ''}
                type="text" placeholder="RSR" name="rsr"
                disabled={submitted}
            />
        </div>
    )
}

export default ParPage
