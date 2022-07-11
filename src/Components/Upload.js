import React from 'react';
import './buttons.css';

const Upload = ({label2, iconUrl, buttonStyle, isDisabled}) => {

    const handleUpload = () =>{
        if(!isDisabled){
            console.log('Got it')
        }
    }

    return (
        <div className='buttonContainer'>
            <button 
                className = {`button ${buttonStyle}`}  
                onClick = {handleUpload}>
                    <img src={iconUrl} alt = '' width={10} height = {10} />
                    {label2}
            </button>
        </div>
    );
    
}

export default Upload;