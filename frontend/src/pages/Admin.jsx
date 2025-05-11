import React from "react"
import useAuthHook from "../../hooks/authHook";
import { Navigate } from "react-router-dom";
import LoaderPage from "../ui/components/loaderPage";
import { useForm } from "react-hook-form"
import Boolean from '../../hooks/boolean'
import axios from 'axios'
import { toast } from 'react-toastify'
import TemplatePreview from '../ui/components/TemplatePreview';
import Button from "../ui/components/button";
import Input from "../ui/components/input";

export default function Admin() {
  const auth = useAuthHook()
  const user = auth?.user;
  const isLoadding = auth?.isLoadding;
  const IsWebsiteAdmin = auth?.IsWebsiteAdmin;
  ;
  const { value: isLoading, setValue: setIsLoading } = Boolean({ values: false })

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm()

  if (isLoadding) return <LoaderPage />;
  if (!user || (user && IsWebsiteAdmin !== true)) return <Navigate to={"/PageError"} />

  const onSubmit = async (data) => {
    setIsLoading(true)
    console.log(data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("html", data.html);
    formData.append("categorie", data.categorie);
    formData.append("thumbnailUrl", data.thumbnailUrl[0]);
   
      console.log(data.thumbnailUrl[0]);
      
    try {
      const res = await axios.post("http://localhost:5000/addtemplate",formData, {
          withCredentials: true
      });
      setIsLoading(false)
      toast.success(res.data.message);
      return
    } catch (err) {
      console.log(err);

      const errState = err.response && err.response.data && err.response.data.message
      if (err.code === "ERR_NETWORK") {
        toast.error("veuillez verifier votre connexion internet")
        setIsLoading(false)
        return
      }
      if (err.status === 401 && errState.name) {
        setError("name", {
          message: err.response.data.message.name
        })
        setIsLoading(false)
        return
      }
      if (err.status === 401 && errState.html) {
        setError("html", {
          message: err.response.data.message.html
        })
        setIsLoading(false)
        return
      }
      if (err.status === 401 && errState.thumbnailUrl) {
        setError("thumbnailUrl", {
          message: err.response.data.message.thumbnailUrl
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

  const htmlContent = watch("html");
  const FileContent = watch("thumbnailUrl");

  return (
    <form  encType="multipart/form-data"  onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-20 gap-10 items-center w-full px-6 max-w-4xl mx-auto ">
    <Input register={register} errors={errors} type={"text"} placeholder={"Nom du template"} id={"name"} htmlFor={"name"} className={""} labelName={"Nom du template"} errorMessage={"le nom du template est requis"} required={true} isLoading={isLoading} />
    <label htmlFor="categorie">categorie</label>
    <select defaultValue={"moderne"} {...register("categorie", { required: true })}>
        <option value="classique">classique</option>
        <option value="moderne">moderne</option>
      </select>
      {errors.categorie && <span className="text-red-500"> Ce champ est requis</span>}
    <input className="w-full" type="file" accept="image/*" {...register("thumbnailUrl", { required: true })} />
      {errors.thumbnailUrl && <span className="text-red-500">Image requise</span>}
    

    <textarea
        className="border border-green-800 w-full h-64 p-2"
        placeholder="Collez ici le HTML du modèle"
        {...register("html", { required: true })}
    />
      {errors.html && <span className="text-red-500"> Ce champ est requis</span>}
      {htmlContent && (
        <div className="w-full mt-6">
          <h2 className="text-lg font-semibold mb-2">Aperçu du modèle :</h2>
          <div className="border p-4 bg-gray-50">
            <TemplatePreview html={htmlContent} />
          </div>
        </div>
      )}
      <div className="w-full">
       <Button type={"submit"} isLoadding={isLoading} text={"envoyer"} />
      </div>
      
    </form>
  );
}
