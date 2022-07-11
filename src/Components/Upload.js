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
                    <div>
                        <img src={iconUrl} alt = '' width={10} height = {10} />
                        {label2}
                    </div>
            </button>
        </div>
    );
    
}

export default Upload;