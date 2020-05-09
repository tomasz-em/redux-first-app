import React from 'react';
import './Chat.css';

const Chat = ( props ) => {
    return (
        <div>
            <h1>Chat</h1>
            <p>Zalogowałeś się jako <strong>{ props.nick ? props.nick : "!NIEZALOGOWANY!"}</strong></p>
            <a href="/">powrót</a>
        </div>
    );
}

export { Chat };