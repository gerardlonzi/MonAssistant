import React from 'react'
import clsx from 'clsx'
import { EyeOff } from 'lucide-react'
import { Eye } from 'lucide-react'
import Boolean from '../../../hooks/boolean'


export default function Input({ register, errors, type, placeholder, id, htmlFor, labelName, errorMessage, required, isLoading }) {

  const { value: EyeOn, setValue: setIsEyeON,Toogle:ChangeEyeType } = Boolean({ values: false })

  return (
    type == "password" ?
      <>
        <div className='flex flex-col w-full'>
          <label className={clsx(required && "after:content-['*'] after:text-red-700 after:text-xl after:ml-[0.5px]","mb-[1px] uppercase text-sm font-bold ")} htmlFor={htmlFor}>{labelName}</label>
          <div className='relative'>
            <input className={clsx(errors[id] ? "text-red-600 border border-red-600 placeholder:text-red-600 focus:outline-0 " : "focus:outline-[1px] focus:outline-green-700 border border-green-700", "w-full rounded-sm  px-2 py-2")} autoComplete='off' disabled={isLoading} type={EyeOn?"text":type} placeholder={placeholder} id={id} {...register(id, {
              required: {
                value: required, message: errorMessage
              }
            })} />
            {
              EyeOn ? <Eye onClick={() => ChangeEyeType()} className='absolute cursor-pointer right-4 bottom-2 w-5 text-gray-500' /> : <EyeOff onClick={() => ChangeEyeType()} className='absolute cursor-pointer right-4 bottom-2 w-5 text-gray-500' />
            }
          </div>
          {errors[id] && <span className='text-[15px] text-red-600'>{errors[id]?.message}</span>}
        </div>

      </>
      :
      <>
        <div className='flex flex-col w-full'>
          <label className={clsx(required && "after:content-['*'] after:text-red-700 after:text-xl after:ml-[0.5px]","mb-[1px] uppercase text-sm font-bold ")} htmlFor={htmlFor}>{labelName}</label>
          <input className={clsx(errors[id] ? "text-red-600 border border-red-600 placeholder:text-red-600 focus:outline-0 " : "focus:outline-[1px] focus:outline-green-700 border border-green-700", "rounded-sm  px-2 py-2")} autoComplete='off' disabled={isLoading} type={type} placeholder={placeholder} id={id} {...register(id, {
            required: {
              value: required, message: errorMessage
            }
          })} />
          {errors[id] && <span className='text-[15px] text-red-600'>{errors[id]?.message}</span>}
        </div>
      </>

  )
}
