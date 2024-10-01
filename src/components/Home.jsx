import React, { useState } from 'react'
import Phone from './Phone'
import styles from '../styles'
function Home() {
    const amyPhoto = "https://plus.unsplash.com/premium_photo-1661277731403-f5f8f237ae2e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const amyPhoneBackground = "https://images.unsplash.com/photo-1565252556332-4b297517b501?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const johnPhoto = "https://cdn.pixabay.com/photo/2016/05/31/11/26/baby-1426651_1280.jpg"
    const johnPhoneBackground = "https://images.unsplash.com/photo-1464639351491-a172c2aa2911?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const [messages, setMessages] = useState([])
    const [userName1, setUserName1] = useState("")
    const [userName2, setUserName2] = useState("")
    const [displayPhones, setDisplayPhones] = useState(false)

    const start = () => {
        setDisplayPhones(true)
        // userName1 !== "" && userName2 !== "" ? setDisplayPhones(true) : ""
    }
    return (
        <main className={`${styles.outerWrapper}`}>
            <div className={`${styles.wrapper} flex flex-col flex-wrap justify-center items-center sm:flex-row gap-10`}>

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
                                        <input type="text" onChange={(e) => setUserName1(e.target.value)} placeholder="Type first user name" className="input input-bordered w-full max-w-xs" />
                                        <input type="text" onChange={(e) => setUserName2(e.target.value)} placeholder="Type second user name" className="input input-bordered w-full max-w-xs" />
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