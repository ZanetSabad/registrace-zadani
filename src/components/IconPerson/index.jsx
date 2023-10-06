import React from 'react'
import "./style.css"
import Person4Icon from '@mui/icons-material/Person4';

const IconPerson = () => {
  return (
    <div className='outsiderCircle'>
        <div className='person-icon'>
            <div className='innerCircle'>
                <Person4Icon 
                    sx={{
                        fontSize:"65px",
                        color: "#4E6376",
                    }}/>
            </div>
        </div> 
    </div>
  )
}

export default IconPerson