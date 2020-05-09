import React from 'react';
import { Link } from 'react-router-dom';
// import './Chat.css';
import './Home.css';    // wypożyczneie już zdefiniowanych styli ;)

const Chat = ( props ) => {
    return (
        <div className="my-login-form">
            <h1>Chat</h1>
            <p>
                Zalogowałeś się jako <strong>{ props.nick ? props.nick : "!NIEZALOGOWANY!"}</strong><br />
                <br />
                <Link to="/" >powrót></Link>                
            </p>
        </div>
    );
}

export { Chat };