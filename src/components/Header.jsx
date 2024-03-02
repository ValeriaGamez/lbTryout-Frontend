
import React from 'react'
import { useNavigate } from 'react-router-dom'
import $ from 'jquery';  // Import jQuery



const Header = () => {
    const navigate = useNavigate()

    let getExportHeats = async () => {
        let response = await fetch(`/api/pars/export_heats/`)
        let data = await response.json()
    }

    let getExportAll = async () => {
        let response = await fetch(`/api/pars/export_all/`)
        let data = await response.json()
    }

    let getExportRSR = async () => {
        let response = await fetch(`/api/pars/export_rsr/`)
        let data = await response.json()
    }

    

    let handleHeats = async () => {
        await getExportHeats()
        alert("Heats Downloaded");
        navigate('/'); // Use navigate instead of history.push
    };

    let handleAll = async () => {
        await getExportAll()
        alert("All downloaded")
        navigate('/')
    }

    let handleRSR = async () => {
        await getExportRSR()
        alert("RSR times downloaded")
        navigate('/')
    }

    return (
        <div className="app-header">
            <h1>LBLGTryout</h1>
            <div>
                <button onClick={handleHeats} >Export Heats</button>
            </div>
            <div>
                <button onClick={handleRSR} >Export RSR</button>
            </div>
            <div>
                <button onClick={handleAll}>Export All</button>
            </div>
            
        </div>
    )
}

export default Header

