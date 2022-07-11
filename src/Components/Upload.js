import React from 'react';
import './buttons.css';

const Upload = ({label2, iconUrl, buttonStyle}) => {

    const handleUpload = () =>{
        console.log('Got it')
    }

    return (
        <div className='buttonContainer'>
            <button 
                className = {`button ${buttonStyle}`}  
                onClick = {handleUpload}>
                    <img src='./upload.png' alt = '' width={10} height = {10} />
                    {label2}
            </button>
        </div>
    );
    
}

export default Upload;