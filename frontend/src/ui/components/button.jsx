import React from 'react'
import { LoaderCircle } from 'lucide-react'

export default function Button({ type, isLoadding, text, variant,className }) {


  let button;
  switch (variant) {
    case "submit":
      button = <div>

        {
          isLoadding ? <button className='bg-green-800  py-[13px] w-full text-white font-bold rounded-lg cursor-not-allowed' disabled={isLoadding} type={type}><LoaderCircle className='m-auto animate-spin' /></button>
            :
            <button className='bg-green-700 py-[13px] w-full text-white font-bold rounded-lg' type={type}>{text}</button>
        }
      </div>;
      break;
    case "secondary":
      button = <button className={`px-12 py-4 hover:bg-green-500 bg-green-400 font-bold  cursor-pointer rounded-full transition-all text-lg ${className}`}>{text}</button>;
      break;

    case "tercero":
      button = <button className={`px-12 py-4  hover:bg-gray-100 font-bold  cursor-pointer rounded-full transition-all text-lg outline-2 ${className}`}>{text}</button>;
      break;
    default:
      break;
  }

  return (
    button
  )
}
