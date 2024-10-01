import React, { useState, useRef } from 'react';
import Message from './Message';
import { BsFillSendFill } from "react-icons/bs";

function Phone({ user, messages, setMessages, background, receiver, receiverPhoto }) {
    const [messageContent, setMessageContent] = useState("");
    // const messagesEndRef = useRef(null); // Create a ref for scrolling  

    const sendMessage = () => {
        if (messageContent) {
            setMessages(prevMessages => {
                const updatedMessages = [
                    ...prevMessages,
                    {
                        content: messageContent,
                        sender: user,
                        ...getDateTime()
                    }
                ];

                // Scroll to the bottom after adding the new message  
                // if (messagesEndRef.current) {
                //     messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
                // }
                // if (messagesEndRef.current) {
                //     messagesEndRef.current.scrollBottom = messagesEndRef.current.scrollHeight;
                // }

                return updatedMessages; // Return the updated messages  
            });
            setMessageContent(""); // Clear the input  
        }
    };

    const getDateTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        return { date: `${month}/${day}/${year}`, time: `${hours}:${minutes}` };
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (event.shiftKey) {
                setMessageContent(prev => prev + '\n');
                event.preventDefault();
            } else {
                event.preventDefault();
                sendMessage();
            }
        }
    };

    return (
        <div className='w-fit'>
            <h2 className='text-center'>{user}</h2>
            <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                    <div className="relative flex-1 artboard artboard-demo phone-1 flex flex-col justify-end py-4 px-0 bg-center bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url('${background}')` }}
                    >
                        <div className='absolute z-10 top-0 bg-slate-800 w-full p-3 pt-6 flex items-center gap-2'>
                            <div>
                                <img className='w-[50px] h-[50px] rounded-full' src={receiverPhoto} alt="Photo" />
                            </div>
                            <p className='text-lg text-gray-300'>{receiver}</p>
                        </div>

                        <div className='w-full overflow-y-auto h-full'> {/* Add h-full or max-h to allow scrolling */}
                            <div className="flex-1 flex flex-col justify-end w-full"> {/* Use flex-col-reverse to display new messages at the bottom */}
                                {messages.map((message, index) => (
                                    <Message key={index} user={user} message={message} />
                                ))}
                                {/* <div ref={messagesEndRef} /> This empty div acts as a target for scrolling */}
                            </div>
                        </div>

                        <div className='flex items-center gap-2 mt-3'>
                            <textarea
                                value={messageContent}
                                onChange={(e) => setMessageContent(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Write your message..."
                                className="input input-bordered w-full max-w-xs max-h-[100px] p-2 overflow-y resize-none"
                            />
                            <div onClick={sendMessage} className='bg-accent p-4 rounded-full cursor-pointer hover:opacity-90'>
                                <BsFillSendFill className='text-accent-content fill-current' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Phone;