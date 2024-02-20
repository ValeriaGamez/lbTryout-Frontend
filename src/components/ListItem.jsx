import React from 'react'
import { Link } from 'react-router-dom'

let swimTime = (par) => {
  if(par.swimTime == null) return 0
  let time = par.swimTime
  return time
}

let rsrTime = (par) => {
  if(par.rsrTime == null) return 0
  let time = par.rsrTime
  return time
}

let getTime = (par) => {
  return new Date(par.updated).toLocaleDateString()
}

const ListItem = ({par}) => {
  return (
    <div>
      <Link to={`/par/${par.armNum}`}>
        <div className="notes-list-item">
          <h1><span>Arm Number {par.armNum}</span> - {par.name}</h1>
          <p><span>Swim: {swimTime(par)} &nbsp;&nbsp;&nbsp;RSR: {rsrTime(par)}</span></p>
        </div>
        
      </Link>

    </div>
  )
}

export default ListItem