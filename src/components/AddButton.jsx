import React from 'react'
import { Link } from 'react-router-dom'


const AddButton = () => {
  return (
    <Link to="/par/new" className="floating-Button"> 
        <svg version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 32 32"
        fill="#1f2124"
        border-radius="50%"
        align-items= "center"
        style={{
            
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            background: '#f68657',
            border: 'none',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            padding: '10px' 
            
            
            }}
        >
        <title>add</title>
        <path d="M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"></path>
        </svg>


    </Link>
  )
}

export default AddButton