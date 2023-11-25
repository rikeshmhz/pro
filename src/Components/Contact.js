import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleMessage = (e) => {
        e.preventDefault()
        window.location = "mailto:rikesh.0014@gmail.com?subject=From: "+ name + "%0D%0APhone: "+ phone + "&body=" + message
    }
    return (
        <div className='w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white' id='contact'>
            <div className='max-w-screen-lg mx-auto p-4 pt-16'>
                <div className='mb-16'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="" className='flex flex-col w-full md:w-1/2'>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                            onChange={e => { setName(e.target.value) }}
                        />
                        <input
                             type="number"
                             name="phone"
                             placeholder="Phone"
                             class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-3"
                            onChange={e => { setPhone(e.target.value) }}
                        />
                        <textarea name="message" placeholder='Message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' onChange={e => (setMessage(e.target.value))}></textarea>

                        <button className='text-white bg-gradient-to-b from-blue-600 to-blue-900 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-200' onClick={handleMessage}>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact