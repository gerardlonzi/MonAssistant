import React from 'react'
import Container from '../ui/components/container'
import Navbar from '../ui/components/navbar'
import { useForm } from "react-hook-form"
import Input from '../ui/components/input'
import Boolean from '../../hooks/boolean'
import Button from '../ui/components/button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import useAuthHook from '../../hooks/authHook'
import axios from 'axios'
import { toast } from 'react-toastify'
import LoaderPage from '../ui/components/loaderPage'

export default function Login() {
  const navigate = useNavigate()
  const { user, isLoadding,IsWebsiteAdmin} = useAuthHook()
  const { value: isLoading, setValue: setIsLoading } = Boolean({ values: false })
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
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

    try {
      const res = await axios.post("http://localhost:5000/auth/login", data, { withCredentials: true } )
      setIsLoading(false)
      toast.success(res.data.message)
      window.location.reload()
      return
    }
    catch (err) {
      console.log(err);

      const errState = err.response && err.response.data && err.response.data.message
      if (err.code === "ERR_NETWORK") {
        toast.error("veuillez verifier votre connexion internet")
        setIsLoading(false)
        return
      }
      if (err.status === 401 && errState.email) {
        setError("email", {
          message: err.response.data.message.email
        })
        setIsLoading(false)
        return
      }
      if (err.status === 401 && errState.password) {
        setError("password", {
          message: err.response.data.message.password
        })
        setIsLoading(false)
        return
      }
      if (errState) {
        setIsLoading(false)
        toast.error(errState)
        return
      }
    }

  }
  if (isLoadding) return <LoaderPage />
  if (user && IsWebsiteAdmin === false) return <Navigate to={"/dashboard"} />
  if (user && IsWebsiteAdmin === true) return <Navigate to={"/admin"} />

  console.log(watch("example"))

  return (

    <>
      <Container>
        <Navbar />
        <div className='flex items-center justify-center w-full mt-24 '>
          <form onSubmit={handleSubmit(onSubmit)} className='w-96 space-y-5'>
            <Input register={register} errors={errors} type={"email"} placeholder={"Adresse email"} id={"email"} htmlFor={"email"} className={""} labelName={"Email"} errorMessage={"l'email est requis"} required={true} isLoading={isLoading} />
            <Input register={register} errors={errors} type={"password"} placeholder={"password"} id={"password"} htmlFor={"password"} className={""} labelName={"mot de passe"} errorMessage={"le mot de passe est requis"} required={true} isLoading={isLoading} />
            <Link className='text-center block font-bold ' to={"/forget-password"}>vous avez oublié votre mot de passe ?</Link>
            <div className='text-center'>
              <Button text={"envoyer"} isLoadding={isLoading} type={'submit'} />
              <p className='mt-5 text-base/6  text-[13px]'>
                En cliquant sur Envoyer, vous acceptez également <Link className='font-bold underline  text-green-700' to={""}>nos Conditions d'utilisation</Link>  et notre <Link className='font-bold text-green-700 underline' to={""}>Politique de confidentialité.</Link>
              </p>
              <p className='mt-4'>
                Vous avez besoin d'un compte ? <br />
                <Link to={"/signup"} className='font-bold '>S'inscrire gratuitement</Link>

              </p>
            </div>
          </form>
        </div>
      </Container>

    </>
  )
}

