import React from 'react'
import { LoaderCircle } from 'lucide-react'

export default function Button({type,isLoadding,text}) {
  return (
    <div>
      {
        isLoadding ? <button className='bg-green-800  py-[13px] w-full text-white font-bold rounded-lg cursor-not-allowed' disabled={isLoadding} type={type}><LoaderCircle className='m-auto animate-spin'/></button>
        :
        <button className='bg-green-700 py-[13px] w-full text-white font-bold rounded-lg' type={type}>{text}</button>
      }
    </div>
  )
}
