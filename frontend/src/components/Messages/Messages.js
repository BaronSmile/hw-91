import React from 'react';
import Message from "./Message/Message";

const Messages = props => {
    return (
        <>
            <h5>Messages</h5>
            <div className="messages mb-3">
                {props.messages.map(message => (
                    <Message
                        key={message._id}
                        id={message._id}
                        isSystem={message.isSystem}
                        text={message.text}
                        datetime={message.datetime}
                        ws={props.ws}
                        user={props.user}
                    />
                ))}
            </div>
        </>
    );
};

export default Messages;
