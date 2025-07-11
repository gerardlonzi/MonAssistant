import React, { useState } from "react";
import SidebarEditTemplate from "../../ui/components/editTemplateComponent/sidebar";
import FooterStep from "../../ui/components/editTemplateComponent/footerTab";
import { EmptycvData } from "../../data/cv/cvInfos";
import { Upload, Plus } from "lucide-react";
import { useForm } from "react-hook-form"
import Boolean from '../../../hooks/boolean'
import { X } from "lucide-react"

import Input from "../../ui/components/input";


export default function Coordonnees({ getCurrenStep, Next, Prev, IsFirstStep, IsLastStep, NavLinkEditTemplates, StepsCompleted, setCurrenStep }) {
    const [emptycvData, setEmptycvData] = useState(EmptycvData)
    const [supp_infos, setSupp_infos] = useState([])

    const { value: isLoading, setValue: setIsLoading } = Boolean({ values: false })
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log("data " + data);

        Next()

    }


    console.log(watch("nom"))



    const handleTakeImage = (e) => {
        const file = e.target.files?.[0]

        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setEmptycvData({ ...emptycvData, img: reader.result })
            }
            return reader.readAsDataURL(file);

        }


    }

    console.log(supp_infos);

    const add_infos_suppl = (id) => {
        if (!supp_infos.includes(id)) {
            setSupp_infos([...supp_infos, id]);
        }
    };
    const Delete_infos_input = (id) => {
        if (supp_infos.includes(id)) {
            setEmptycvData({...emptycvData,supp_Contact:emptycvData.supp_Contact.map((c) =>
                c.id === id
                    ? { ...c, infos: "" }
                    : c
            )})
            setSupp_infos(supp_infos.filter(el => el !== id));
        }
    };

//a revoir 

    return (
        <section className="">
            <SidebarEditTemplate StepsCompleted={StepsCompleted} isShowTemplateSelected={true} emptycvData={emptycvData} NavLinkEditTemplates={NavLinkEditTemplates} getCurrentStep={getCurrenStep} setCurrenStep={setCurrenStep}>
                <div className=" w-full mt-7 h-[100vh] -z-10">
                    <div>
                        <div className="px-9">
                            <h1 className="text-[30px] font-bold leading-[35px] mb-3">Commencez par compléter <br /> vos <span className="text-green-500">Coordonnées</span></h1>
                            <p>Indiquer au moins votre nom et un moyen de contact afin que les employeurs puissent vous joindre</p>
                        </div>
                        <div className="mt-5">
                            <form onSubmit={handleSubmit(onSubmit)} className=''>
                                <div className="flex items-center px-9 gap-5 relative">
                                    <div className="flex items-center w-full gap-5">
                                        <div className="size-18 bg-gray-200 rounded-full overflow-hidden">
                                            {
                                                emptycvData.img && <img className="w-full h-full object-cover" src={emptycvData.img} alt="profil_cv_picture" />
                                            }
                                        </div>
                                        <div className="flex gap-2 items-center text-[#507dff]">
                                            <label htmlFor="select_picture" className="text-sm font-semibold">TÉLÉCHARGEMENT <br /> D'UNE PHOTO</label>
                                            <Upload />
                                            <input className="" id="select_picture" type="file" accept="image/*" onChange={handleTakeImage} hidden />
                                        </div>
                                    </div>
                                    <Input register={register} errors={errors} type={"text"} placeholder={"Comptable"} id={"profession"} htmlFor={"profession"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"Profession"} required={false} isLoading={isLoading} onChange={(e) => setEmptycvData({
                                        ...emptycvData, profession: e.target.value || "Profession"
                                    })} />


                                </div>
                                <input type="text" onChange={(e) => setEmptycvData({ ...emptycvData, prename: e.target.value || "Prenom" })} />
                                <div className="space-y-6 px-9">
                                    <div className="flex gap-8">
                                        <Input register={register} errors={errors} type={"text"} placeholder={"Lonzi"} id={"nom"} htmlFor={"nom"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"Nom"} errorMessage={"votre nom est réquis"} required={true} isLoading={isLoading} onChange={(e) => setEmptycvData({ ...emptycvData, name: e.target.value || "Nom" })} />


                                        <Input register={register} errors={errors} type={"text"} placeholder={"Alice"} id={"prenom"} htmlFor={"prenom"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"PRENOM"} required={true} isLoading={isLoading} errorMessage={"votre prenom est réquis"} onChange={(e) => setEmptycvData({ ...emptycvData, prename: e.target.value || "Prenom" })} />
                                    </div>
                                    <div>
                                        <Input register={register} errors={errors} type={"text"} placeholder={"Mendong Simbock,Rt 67"} id={"adresse_postale"} htmlFor={"adresse_postale"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"Adresse Postale (FACULTATIF)"} required={false} isLoading={isLoading} onChange={(e) => setEmptycvData({
                                            ...emptycvData, contact: emptycvData.contact.map((c, index) =>
                                                index === 3
                                                    ? { ...c, infos: e.target.value || "Addresse postale" }
                                                    : c
                                            )
                                        })} />
                                    </div>
                                    <div className="flex gap-8">
                                        <Input register={register} errors={errors} type={"text"} placeholder={"france"} id={"pays"} htmlFor={"pays"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"Pays / Region"} errorMessage={"votre pays est réquis"} required={true} isLoading={isLoading} onChange={(e) => setEmptycvData({
                                            ...emptycvData, contact: emptycvData.contact.map((c, index) =>
                                                index === 2
                                                    ? { ...c, infos: { ...c.infos, pays: e.target.value || "Pays" } }
                                                    : c
                                            )
                                        })} />


                                        <Input register={register} errors={errors} type={"text"} placeholder={"London"} id={"ville"} htmlFor={"ville"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"Ville"} required={true} isLoading={isLoading} onChange={(e) => setEmptycvData({
                                            ...emptycvData, contact: emptycvData.contact.map((c, index) =>
                                                index === 2
                                                    ? { ...c, infos: { ...c.infos, ville: e.target.value || "ville" } }
                                                    : c
                                            )
                                        })} />

                                    </div>
                                    <div className="flex gap-8">
                                        <Input register={register} errors={errors} type={"number"} placeholder={"40456789"} id={"telephone"} htmlFor={"telephone"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"TÉLEPHONE"} errorMessage={"votre téléphone est réquis"} required={true} isLoading={isLoading} onChange={(e) => setEmptycvData({
                                            ...emptycvData, contact: emptycvData.contact.map((c, index) =>
                                                index === 0
                                                    ? { ...c, infos: e.target.value || "téléphone" }
                                                    : c
                                            )
                                        })} />

                                        <Input register={register} errors={errors} type={"email"} placeholder={"alicelonzi@gmail.com"} id={"email"} htmlFor={"email"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} errorMessage={"votre email est réquis"} labelName={"ADRESSE EMAIL"} required={true} isLoading={isLoading} onChange={(e) => setEmptycvData({
                                            ...emptycvData, contact: emptycvData.contact.map((c, index) =>
                                                index === 1
                                                    ? { ...c, infos: e.target.value || "email" }
                                                    : c
                                            )
                                        })} />

                                    </div>
                                    <div className="grid grid-cols-2 gap-8">
                                        {
                                            emptycvData.supp_Contact.map(el =>
                                                supp_infos.includes(el.id) && <div key={el.id} className="relative isStud">

                                                    <Input register={register} errors={errors} type={"text"} placeholder={el.placeholder} id={el.htmlfor} htmlFor={el.htmlfor} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={el.name} required={false} isLoading={isLoading} onChange={(e) => setEmptycvData({
                                                        ...emptycvData, supp_Contact: emptycvData.supp_Contact.map((c) =>
                                                            c.id === el.id
                                                                ? { ...c, infos: e.target.value }
                                                                : c
                                                        )
                                                    })} />
                                                    <div onClick={() => Delete_infos_input(el.id)} className="absolute rounded-full -right-2 p-1 bg-red-500 top-3 cursor-pointer">
                                                        <X className="w-3 h-3 text-white" />

                                                    </div>
                                                </div>

                                            )
                                        }
                                    </div>
                                </div>
                                <div className="mt-10 px-9">
                                    <p className="text-sm font-semibold">INFORMATIONS SUPPLEMENTAIRE</p>
                                    <div className="mt-3 flex flex-wrap  gap-3">
                                        {
                                            EmptycvData.supp_Contact.map(el => <p key={el.id} onClick={() => add_infos_suppl(el.id)
                                            } className="text-[15px]  hover:bg-[#007aff] bg-[#f8f8f8] hover:text-white group px-5 py-[6px] border border-gray-200 transition-all cursor-pointer flex items-center">{el.name}<Plus className="w-4 text-gray-400 ml-2 group-hover:text-white" /></p>)
                                        }
                                    </div>

                                </div>

                                <FooterStep IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} isLoadding={isLoading} />
                            </form>



                        </div>


                    </div>
                </div>

            </SidebarEditTemplate>

        </section>

    )


}