import React from 'react'

function Message({ user, message }) {

    return (
        <div className={`chat w-full ${user === message.sender ? "chat-end" : "chat-start"}`}>
            <div className="chat-header flex gap-1 items-center">
                {message.sender}
                <time className="text-xs opacity-50">{message.time}</time>
            </div>
            <div className={`chat-bubble break-words font-medium text-gray-100 ${user === message.sender ? "bg-gray-700" : "bg-success"}`}>
                {message.content}
            </div>
            {/* <div className="chat-footer opacity-50">Delivered</div> */}
        </div>
    )
}

export default Message