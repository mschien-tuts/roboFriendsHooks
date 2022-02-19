import './Card.css';
import React from 'react';

const Card = () => {
    return (
        <div className={"Card"}>
            <img src='' alt="A robot"/>
            <div>
                <h2>Jane Doe</h2>
                <p>janedoe@gmail.com</p>
            </div>
        </div>
    )
}

export default Card;