import React, { useEffect, useState } from 'react'
import tickImage from "../../../Assets/ThankPopUp/tickImage.png"
import { IoClose } from 'react-icons/io5'

const SubmitPopUp = ({ setShowPopUp }) => {
    const [ timer, setTimer ] = useState(10)

    useEffect(() => {
        if (timer) {
            setTimeout(() => {
                setTimer(prev => prev - 1)
            }, 980)
        }   
    }, [timer])

  return (
    <div className={` fixed backdrop-blur-sm w-screen h-screen z-50 bg-transparent flex justify-center items-center`}>
        <div className='w-[50rem] rounded-3xl p-5 bg-[#c3fae8] flex flex-col items-center justify-center relative'>

            <button 
                onClick={() => setShowPopUp(false)}
                className='absolute top-6 right-6 w-8 aspect-square flex items-center justify-center border-2 border-gray-800 rounded-full text-2xl text-gray-700 font-bold'
            >
                <IoClose />
            </button>

            <img src={tickImage} className='w-40' alt='tick' />

            <p className='font-semibold text-xl'>
                Thank you for your submission
            </p>
            <p className='font-semibold text-xl'>
                Our team will get back to you with the confirmed appointment details
            </p>

            <p className='mt-10 text-xl font-semibold'>
                <span className='text-red-700 font-bold'>Note: </span>This pop up will disappear in {timer} second{timer > 1 && "s"}
            </p>
        </div>
    </div>
  )
}

export default SubmitPopUp