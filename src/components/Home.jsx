import React, { useRef, useState, } from 'react'
import Phone from './Phone'
import styles from '../styles'
function Home() {
    const amyPhoto = ""
    const amyPhoneBackground = ""
    const johnPhoto = ""
    const johnPhoneBackground = ""
    const [messages, setMessages] = useState([])
    const [userName1, setUserName1] = useState("")
    const [userName2, setUserName2] = useState("")
    const [displayPhones, setDisplayPhones] = useState(false)

    const start = () => {
        if (userName1 && userName2 && userName1 !== userName2 && userName1.length < 10 && userName2.length < 10) {
            setDisplayPhones(true)
        }
    }
    return (
        <main className={`${styles.outerWrapper}`}>
            <div className={`${styles.wrapper} relative flex flex-col flex-wrap justify-center items-center sm:flex-row gap-10`}>

                {
                    displayPhones ?
                        <>
                            <Phone user={userName1} messages={messages} setMessages={setMessages} background={amyPhoneBackground} receiver={userName2} receiverPhoto={johnPhoto} />
                            <Phone user={userName2} messages={messages} setMessages={setMessages} background={johnPhoneBackground} receiver={userName1} receiverPhoto={amyPhoto} />
                        </>
                        :
                        <>
                            <div className="mockup-phone">
                                <div className="camera"></div>
                                <div className="display">
                                    <div className="artboard artboard-demo phone-1 flex flex-col gap-6 p-4">
                                        <h1 className='text-xl md:text-2xl font-semibold mb-4'>Welcome</h1>
                                        <div>
                                            <input type="text" onChange={(e) => setUserName1(e.target.value)} placeholder="Type first user name" className="input input-bordered w-full max-w-xs" />
                                            <input type="text" onChange={(e) => setUserName2(e.target.value)} placeholder="Type second user name" className="mt-5 mb-3 input input-bordered w-full max-w-xs" />
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
                                                <span>Please, no empty names and not equal, and &lt; 10 letters</span>
                                            </div>

                                        </div>
                                        <button onClick={start} className='btn btn-primary'>Start</button>
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </div>
        </main>

    )
}

export default Home