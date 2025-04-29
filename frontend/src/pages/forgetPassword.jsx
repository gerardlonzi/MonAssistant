import React from 'react'
import Container from '../ui/components/container'
import Navbar from '../ui/components/navbar'
import { useForm } from "react-hook-form"
import Input from '../ui/components/input'
import Boolean from '../../hooks/boolean'
import Button from '../ui/components/button'
import { Link } from 'react-router-dom'
export default function ForgetPassword() {
  const { value: isLoading, setValue: setIsLoading } = Boolean({ values: false })
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setIsLoading(true)
    const { email, password } = data
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regex.test(email)) {
      setError('email', { message: "mauvais format d'adresse email" })
      setIsLoading(false)
      return
    }
    if (password.length < 8) {
      setError('password', { message: "le password doit contenir au moins 8 caractéres" })
      setIsLoading(false)
      return
    }


  }


  console.log(watch("example"))

  return (
    <>
      <Container>
        <Navbar />
        <div className='flex items-center justify-center w-full mt-24 '>
          <form onSubmit={handleSubmit(onSubmit)} className='w-96 space-y-5'>
            <Input register={register} errors={errors} type={"email"} placeholder={"Adresse email"} id={"email"} htmlFor={"email"} className={""} labelName={"Email"} errorMessage={"email is required"} required={true} isLoading={isLoading} />
            <Button text={"send code"} isLoadding={isLoading} type={'submit'} />
          </form>
        </div>
      </Container>

    </>
  )
}

