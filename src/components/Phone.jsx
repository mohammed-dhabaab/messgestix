import React, { useState, useRef } from 'react';
import Message from './Message';
import { BsFillSendFill } from "react-icons/bs";
import { PiSelectionBackgroundBold } from "react-icons/pi";

function Phone({ user, messages, setMessages, background, receiver, receiverPhoto }) {
    const [messageContent, setMessageContent] = useState("");
    // const messagesEndRef = useRef(null); // Create a ref for scrolling  
    const [backgroundSrc, setBackgroundSrc] = useState(background)
    const [receiverPhotoSrc, setReceiverPhotoSrc] = useState(receiverPhoto)
    const [backgroundLink, setBackgroundLink] = useState("")
    const [receiverPhotoLink, setReceiverPhotoLink] = useState("")
    const [changeImages, setChangeIMages] = useState(false)

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


    const setImages = () => {
        if (backgroundLink !== "" && receiverPhotoLink !== "") {
            setBackgroundSrc(backgroundLink)
            setReceiverPhotoSrc(receiverPhotoLink)
            setChangeIMages(false)
        }
    }

    return (
        <div className='w-fit'>
            <h2 className='text-center'>{user}</h2>
            <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                    <div className="relative flex-1 artboard artboard-demo phone-1 flex flex-col justify-end pb-4 px-0 bg-center bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url('${backgroundSrc}')` }}
                    >

                        <div className='bg-slate-800 w-full p-3 pt-6 flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <img className='w-[50px] h-[50px] rounded-full' src={receiverPhotoSrc} alt="Photo" />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-lg text-gray-300'>{receiver}</p>
                                    <p className='text-xs text-success'>Online</p>
                                </div>
                            </div>

                            <div onClick={() => setChangeIMages(true)} title='Change Images' className='p-2 bg-slate-600 rounded-full text-gray-100 cursor-pointer'>
                                <PiSelectionBackgroundBold />
                            </div>
                        </div>

                        <div className={`${changeImages ? "flex" : "hidden"} bg-gray-800 p-2 w-3/4 rounded-md h-fit flex-col gap-2  absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                            <input onChange={((e) => setReceiverPhotoLink(e.target.value))} type="text" placeholder="Photo Link" className="input input-bordered w-full max-w-xs placeholder:text-xs" />
                            <input onChange={(e) => setBackgroundLink(e.target.value)} type="text" placeholder="Background Link" className="input input-bordered w-full max-w-xs placeholder:text-xs" />
                            <div className='flex gap-2 items-center text-xs text-gray-500'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4 shrink-0 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>Please, not empty</span>
                            </div>
                            <button onClick={setImages} className='btn' >Submit</button>
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