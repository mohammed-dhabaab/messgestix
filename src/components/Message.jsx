import React from 'react'

function Message({ user, message }) {
    const formatMessageContent = (content) => {
        return content.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                {index < content.split('\n').length - 1 && <br />}
            </span>
        ));
    };
    return (
        <div className={`chat w-full ${user === message.sender ? "chat-end" : "chat-start"}`}>
            <div className="chat-header flex gap-1 items-center">
                {message.sender}
                <time className="text-xs opacity-50">{message.time}</time>
            </div>
            <div className={`chat-bubble break-words font-medium text-gray-100 ${user === message.sender ? "bg-gray-700" : "bg-success"}`}>
                {formatMessageContent(message.content)}
            </div>
            {/* <div className="chat-footer opacity-50">Delivered</div> */}
        </div>
    )
}

export default Message