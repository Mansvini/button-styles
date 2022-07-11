import React from 'react';
import './buttons.css';

const AddToCart = ({label1, buttonStyle, isDisabled}) => {

    const handleAddToCart = () =>{
        if(!isDisabled){
            console.log('Added to cart!')
        }    
    }

    return (
        <div className='buttonContainer'>
            <button className = {`button ${buttonStyle}`}
                    onClick = {handleAddToCart}>
                {label1}
            </button>
        </div>
    );
    
}

export default AddToCart;