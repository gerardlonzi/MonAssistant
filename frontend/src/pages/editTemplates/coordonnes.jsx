import React, { useState } from "react";
import SidebarEditTemplate from "../../ui/components/editTemplateComponent/sidebar";
import FooterStep from "../../ui/components/editTemplateComponent/footerTab";
import { EmptycvData } from "../../data/cv/cvInfos";
import { Upload } from "lucide-react";
import { useForm } from "react-hook-form"
import Input from "../../ui/components/input";


export default function Coordonnees({ getCurrenStep, Next, Prev, IsFirstStep, IsLastStep, NavLinkEditTemplates, StepsCompleted, setCurrenStep }) {
    const [emptycvData, setEmptycvData] = useState(EmptycvData)

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

    }


    console.log(watch("example"))



    const handleTakeImage = (e) => {
        const file = e.target.files?.[0]

        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setEmptycvData({ ...emptycvData, img: reader.result })
            }
            console.log(emptycvData.img);

            return reader.readAsDataURL(file);

        }


    }







    return (
        <section className="">
            <SidebarEditTemplate StepsCompleted={StepsCompleted} isShowTemplateSelected={true} emptycvData={emptycvData} NavLinkEditTemplates={NavLinkEditTemplates} getCurrentStep={getCurrenStep} setCurrenStep={setCurrenStep}>
                <div className="p-9 w-full relative -z-10">
                    <div>
                        <div>
                            <h1 className="text-[30px] font-bold leading-[35px] mb-3">Commencez par compléter <br /> vos <span className="text-green-500">Coordonnées</span></h1>
                            <p>Indiquer au moins votre nom et un moyen de contact afin que les employeurs puissent vous joindre</p>
                        </div>
                        <div className="mt-5">
                            <form onSubmit={handleSubmit(onSubmit)} className=''>
                                <div className="flex items-center gap-2 relative">
                                    <div className="size-18 bg-gray-200 rounded-full overflow-hidden">
                                        {
                                            emptycvData.img && <img className="w-full h-full object-cover" src={emptycvData.img} alt="profil_cv_picture" />
                                        }
                                    </div>
                                    <div className="flex gap-2 items-center text-[#507dff]">
                                        <label htmlFor="select_picture" className="text-sm font-semibold">TÉLÉCHARGEMENT     D'UNE PHOTO</label>
                                        <Upload />
                                        <input className="" id="select_picture" type="file" accept="image/*" onChange={handleTakeImage} hidden />
                                    </div>
                                </div>
                                <input type="text" onChange={(e) => setEmptycvData({ ...emptycvData, prename: e.target.value || "Prenom" })} />
                                <div className="space-y-6">
                                    <div className="flex gap-8">
                                        <Input register={register} errors={errors} type={"text"} placeholder={"Alice"} id={"prenom"} htmlFor={"prenom"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"PRENOM"} required={true} isLoading={isLoading} onChange={(e) => setEmptycvData({ ...emptycvData, prename: e.target.value || "Prenom" })} />

                                        <Input register={register} errors={errors} type={"text"} placeholder={"Lonzi"} id={"nom"} htmlFor={"nom"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"Nom"} required={true} isLoading={isLoading} onChange={(e) => setEmptycvData({ ...emptycvData, prename: e.target.value || "Nom" })} />

                                    </div>
                                    <div>
                                        <Input register={register} errors={errors} type={"text"} placeholder={"40 Entree Simbock,Rt 67"} id={"adresse_postale"} htmlFor={"adresse_postale"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"Adresse Postale (FACULTATIF)"} required={false} isLoading={isLoading} onChange={(e) => setEmptycvData({ ...emptycvData, prename: e.target.value || "Adresse Postale" })} />
                                    </div>
                                    <div className="flex gap-8">
                                        <Input register={register} errors={errors} type={"text"} placeholder={"40456"} id={"code_postal"} htmlFor={"code_postal"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"Code Postal "} required={false} isLoading={isLoading} onChange={(e) => setEmptycvData({ ...emptycvData, prename: e.target.value || "Code Postal" })} />
                                        <Input register={register} errors={errors} type={"text"} placeholder={"London"} id={"ville"} htmlFor={"ville"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"Ville"} required={false} isLoading={isLoading} onChange={(e) => setEmptycvData({ ...emptycvData, prename: e.target.value || "Ville" })} />

                                    </div>
                                    <div className="flex gap-8">
                                        <Input register={register} errors={errors} type={"number"} placeholder={"40456789"} id={"telephone"} htmlFor={"telephone"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"TÉLEPHONE"} required={true} isLoading={isLoading} onChange={(e) => setEmptycvData({ ...emptycvData, prename: e.target.value || "télephone" })} />
                                        <Input register={register} errors={errors} type={"email"} placeholder={"alicelonzi@gmail.com"}  id={"email"} htmlFor={"email"} className={"py-[7px] placeholder:text-[15px] mt-[4px] "} label_className={"text-[11px]"} labelName={"ADRESSE EMAIL"} required={true} isLoading={isLoading} onChange={(e) => setEmptycvData({ ...emptycvData, prename: e.target.value || "EmailL" })} />

                                    </div>
                                </div>

                                <FooterStep Next={Next} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} isLoadding={false} />
                            </form>


                        </div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur repellat assumenda ratione reiciendis vitae corrupti deleniti, quaerat ducimus praesentium incidunt exercitationem iusto. Et, totam magnam vel voluptatibus minus doloribus vero?
                        Excepturi quis soluta minus iure odit iste reprehenderit delectus accusantium iusto ab ea at, fugiat asperiores quisquam quia esse tenetur modi dolore nobis culpa. Modi vel nisi quaerat molestiae debitis.
                        Quidem minus eaque nisi atque sequi doloremque aut. Quam quo enim a quae sed consequatur dolore voluptatum quidem commodi nisi laboriosam amet nostrum, reprehenderit asperiores repellendus incidunt architecto consequuntur excepturi?
                        Sit corporis quas nemo officia autem, qui culpa ea fuga! Ratione nulla sit id molestiae iste quos, expedita, magnam, fugit ipsum quo porro. Nesciunt totam debitis labore, illo ipsum eveniet!
                        Hic vel adipisci magni cumque? Vero dicta ipsam voluptatum alias necessitatibus harum error iure neque accusantium. Itaque culpa quam et impedit doloribus vero quod consectetur enim, provident neque possimus necessitatibus.
                        Quasi quisquam enim nobis impedit ab incidunt quae modi, numquam commodi nostrum deserunt, quam nesciunt explicabo neque soluta sequi, dolorem unde magnam reprehenderit libero excepturi corporis facere perspiciatis! Doloribus, sint!
                        Necessitatibus officiis vel dolorum reiciendis praesentium saepe nam atque incidunt, tempora culpa assumenda quos veritatis vitae quaerat amet ducimus ea! Eligendi vero, molestias nam repellat ab voluptate nesciunt explicabo eos.
                        Expedita doloremque consectetur, maiores perferendis inventore soluta dolor nostrum ipsum ea eum illo tempore incidunt eaque aut aspernatur molestias molestiae? Ea placeat molestiae quia nesciunt animi sunt aut nulla. Porro.
                        Debitis repellat vero quasi nulla! Necessitatibus, autem id nostrum corrupti ex voluptatibus impedit deleniti assumenda nemo inventore. Possimus, repellat voluptatum iste perferendis nobis laborum. Natus nam maiores voluptas? Eaque, iure!
                        Exercitationem tempora ratione eos earum laborum animi iusto ad maiores placeat sequi, quod doloremque aperiam aspernatur, saepe praesentium corporis quos cupiditate, quae mollitia! Expedita ratione reiciendis deleniti sunt facilis deserunt?
                        Recusandae quisquam architecto sapiente cumque, tempora corrupti sint nostrum ratione sed fuga laudantium obcaecati ipsa voluptate adipisci incidunt provident quibusdam itaque quos esse ipsum asperiores minus rem? Facere, ullam maxime.
                        Maiores provident ullam illo error veritatis pariatur tenetur earum id dolor eaque. Atque consequuntur, eum dolore non rerum sint a sit dolorem nobis commodi. Minima molestias ipsa quidem reiciendis provident.
                        Beatae facilis doloremque aspernatur odit dolores provident error quod molestiae, laboriosam ad aliquid voluptas vitae tenetur? Dignissimos, blanditiis in alias ex voluptatem odio quaerat eum esse ea a doloremque totam!
                        Vel ea facilis voluptatibus voluptatum obcaecati sint temporibus officia adipisci assumenda necessitatibus. Fugiat dolores vel reiciendis, iusto error sapiente dolorum, tempore officia, voluptates accusantium voluptas repellat. Cumque deserunt repellat repudiandae.
                        Delectus deleniti a ex quis maxime incidunt placeat laudantium ducimus dolorem, cum voluptates, tenetur excepturi in perferendis iure id nam eos accusamus labore eveniet ullam voluptatibus, quibusdam voluptatem. Earum, natus?
                        Nihil eaque facere et necessitatibus natus, soluta totam adipisci illum sunt consequuntur architecto doloremque quis saepe repudiandae, nam esse repellendus blanditiis veniam possimus officiis, sit perspiciatis est pariatur. Nemo, vel!
                        Velit nesciunt et cum ex fugiat rerum fuga ab reprehenderit corporis praesentium recusandae debitis sint, fugit qui eum dolorum assumenda quia sapiente pariatur maiores vel nulla deserunt asperiores? Facere, alias!
                        Maiores quos ea vitae est quod accusamus necessitatibus nam magnam. Sit, tenetur sed. Reiciendis quibusdam tempore dolore quos minima velit repellendus consequuntur expedita similique ducimus magnam, qui nulla repellat illo!
                        Doloribus sint iusto fuga est ut, maiores nam adipisci aut doloremque odio dolores harum soluta rem vel odit itaque distinctio eius. Labore dolores natus enim aliquam qui a error? Repudiandae?
                        Minus modi odio sed in blanditiis. Hic veniam placeat eos quam, quisquam expedita repellendus eveniet eaque reprehenderit. Autem dolore rerum laborum, maxime ducimus, obcaecati inventore architecto praesentium porro, eius quisquam.
                        
                    </div>
                </div>

            </SidebarEditTemplate>

        </section>

    )


}