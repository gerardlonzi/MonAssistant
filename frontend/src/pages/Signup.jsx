import React from 'react'
import { useContext } from "react";

import Container from '../ui/components/container'
import Navbar from '../ui/components/navbar'
import { useForm } from "react-hook-form"
import Input from '../ui/components/input'
import useBoolean from '../../hooks/boolean'
import Button from '../ui/components/button'
import { Link } from 'react-router-dom'
import {  toast } from 'react-toastify'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { AuthContext } from "../../hooks/authHook";
import LoaderPage from '../ui/components/loaderPage'

export default  function SignUp() {
  const navigate = useNavigate()
  const { user, isLoadding, IsWebsiteAdmin } = useContext(AuthContext);  
  const { value: isLoading, setValue: setIsLoading } = useBoolean({ values: false })
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm()

  const onSubmit = async(content) => {
    setIsLoading(true)
    const { email, password } = content
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
    try{
       let res = await axios.post("http://localhost:5000/auth/register",content,{ withCredentials: true })
      console.log(res.data);
      
      setIsLoading(false)
      toast.success(res.data.message)
      navigate("/dashboard")
      return
    }
    catch(err){
      setIsLoading(false)
      console.log(err);
      
      let errMessage = err.response && err.response.data && err.response.data.message
      if(err.status === 401 && errMessage.email){
        setError("email",{
          message:errMessage.email
        })
        return
      }
      if(errMessage){
        toast.error(err.response.data.message)
        return

      } 
      else{
        toast.error("une erreur est survenue")
        return
      }
    }


  }


  console.log(watch("example"))


  if (isLoadding) return <LoaderPage />

  if(user && IsWebsiteAdmin === false ) return <Navigate to={"/dashboard"} />
  if(user && IsWebsiteAdmin === true ) return <Navigate to={"/admin"} />

  return (
    <>
        <Navbar />
      <Container className='mt-44'>
        <div className='flex items-center justify-center w-full mt-24 '>
          <form onSubmit={handleSubmit(onSubmit)} className='w-96 space-y-5'>
            <Input register={register} errors={errors} type={"username"} placeholder={"username"} id={"username"} htmlFor={"username"} className={""} labelName={"Username"}   required={false} isLoading={isLoading} />
            <Input register={register} errors={errors} type={"email"} placeholder={"Adresse email"} id={"email"} htmlFor={"email"} className={""} labelName={"Email"} errorMessage={"l'email est requis"} required={true} isLoading={isLoading} />
            <Input register={register} errors={errors} type={"password"} placeholder={"password"} id={"password"} htmlFor={"password"} className={""} labelName={"mot de passe"} errorMessage={"le mot de passe est requis"} 
            required={true} isLoading={isLoading} />
            <div className='text-center'>
              <Button text={"envoyer"} isLoadding={isLoading} variant={"submit"} type={'submit'} />
              <p className='mt-5 text-base/6  text-[13px]'>
                En cliquant sur Envoyer, vous acceptez également <Link className='font-bold underline  text-green-700' to={""}>nos Conditions d'utilisation</Link>  et notre <Link className='font-bold text-green-700 underline' to={""}>Politique de confidentialité.</Link>
              </p>
              <p className='mt-4'>
                Vous avez déjà un compte ? <br />
                <Link to={"/login"} className='font-bold '>Se connecter</Link>

              </p>
            </div>
          </form>
        </div>
      </Container>

    </>
  )
}

