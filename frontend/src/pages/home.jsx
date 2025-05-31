import { Search } from "lucide-react";
import Container from "../ui/components/container";
import Navbar from "../ui/components/navbar";
import useAuthHook from "../../hooks/authHook";
import LoaderPage from "../ui/components/loaderPage";
import LinkComponent from "../ui/components/Link";
import Keyframes from "../ui/components/animation";
export default function Home() {
  const { isLoadding, user,IsWebsiteAdmin } = useAuthHook()
  if (isLoadding) return <LoaderPage />

  return (
    <>
        <Navbar user={user} IsWebsiteAdmin={IsWebsiteAdmin} />
      <Container className="mt-44">
        <section>
        <div className="flex items-center gap-24 mt-28 relative">
          <div className="">
            <h1 className="text-6xl font-bold leading-18">Le CV qui décroche le poste...  facilement</h1>
            <div className='text-xl text-[#00275b] space-y-4 mt-12'>
              <div className='flex gap-4   items-center'>
                <div className='size-8 flex items-center justify-center bg-green-600 text-white font-bold rounded-full'>1</div>
                <span>Sélectionnez un CV parmi tous nos modèles professionnels</span>
              </div>
              <div className='flex gap-4  items-center'>
                <div className='size-8 flex items-center justify-center bg-green-600 text-white font-bold rounded-full'>2</div>
                <span>Rédigez votre CV grâce à notre outil d’aide au contenu</span>
              </div>
              <div className='flex gap-4   items-center'>
                <div className='size-8 flex items-center justify-center bg-green-600 text-white font-bold rounded-full'>3</div>
                <span>Téléchargez et envoyez votre CV en ligne</span>
              </div>
            </div>
            <div className="mt-14 text-xl space-x-5">
             <LinkComponent content={"créer un cv"} variant={"secondary"} to={"/creer-cv"} />
             <LinkComponent content={"Améliorer mon cv"} variant={"primary"} to={"/creer-cv"} />
             
            </div>
          </div>
          <div className="relative rounded-br-[20%]  w-[500px] ">
            <img src="/imgs/hero-img.png" className="relative  bk-img1" alt="hero-img" />
            <div className="w-72 bg-green-600 -z-10 rounded-tl-[100px] h-full  absolute bottom-0 right-11 bk-green"></div>
            <Keyframes />
          </div>
          <div className="w-16 h-16 absolute bg-green-100 -z-10 -top-10 "></div>
        </div>
        </section>
        <p className="mt-44"></p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet blanditiis hic! Voluptatibus libero dolorem cumque maxime deleniti, ipsa perspiciatis in, dolor, nesciunt beatae velit accusamus aperiam reprehenderit dolore eius.
        Possimus labore iste doloremque facilis quasi delectus impedit ducimus quos totam odio magni dolorem, minus vero! Voluptate iure deleniti dolorum ipsum consequatur totam, minus, veniam soluta asperiores nostrum, neque saepe.
        Nam minus aliquid iusto necessitatibus. Architecto facere deserunt nostrum blanditiis impedit. Hic, rem molestias dolore minus possimus iusto ipsa libero distinctio omnis nihil cum accusantium cumque laborum voluptas, eligendi provident.
        Cum, excepturi illum aliquam velit assumenda porro dicta commodi blanditiis cumque et fugit quaerat sequi. Voluptatibus, nihil ducimus. Sint illo error sapiente, corrupti et odio nostrum. Expedita dolore enim voluptates.
        Nostrum rerum suscipit quam vero pariatur vel, debitis odio beatae impedit deserunt maxime doloremque dolorem id illo omnis molestiae earum nihil. Consequuntur velit accusamus repellat possimus laboriosam iste, aperiam beatae?
        Ipsum dicta delectus illum possimus nihil nam excepturi sed quasi pariatur neque voluptatibus animi, architecto, quis facilis nobis laborum fugiat, velit quod aliquam rerum ab voluptates error praesentium. Quod, facere.
        Illum numquam veritatis consequuntur rem distinctio sapiente deserunt obcaecati rerum reprehenderit provident ab aperiam aliquam iusto facere doloremque velit impedit dolorum eos quia, ea eligendi? Iusto dolorem natus corrupti vel.
        Ut sed iusto possimus ratione, nam rem minus incidunt a repellendus vel soluta fugit quam laborum iste placeat quia doloribus architecto laudantium at delectus fuga eius modi dolores. Eveniet, excepturi?
        Aliquid aspernatur, possimus commodi eos molestias eaque odit minus eveniet temporibus rerum in. Deleniti molestias magnam voluptate quasi deserunt quas ratione! Officia hic suscipit voluptate necessitatibus praesentium commodi alias rerum!
        Laborum ea ullam doloribus dicta deserunt ad quae odio ipsam illum, aut recusandae repudiandae. Asperiores, error consectetur harum perferendis cumque quisquam! Modi magnam magni laudantium? Hic optio aperiam deserunt consequatur.
        Repellendus in tenetur ipsa non sunt vel dolorem natus mollitia? Id ratione architecto qui vitae quaerat in provident repudiandae modi, ullam ex, eos illum suscipit exercitationem dolor cupiditate laborum maxime.
        Quasi maxime praesentium dolores, dolorem quibusdam dolorum temporibus ducimus corporis odit ab? Sapiente fugit suscipit recusandae quis nostrum delectus deserunt. Ipsum veritatis distinctio quae cum, in quidem ipsa aut error.
        Voluptatem, veritatis culpa voluptate architecto cum earum sapiente similique inventore reprehenderit perferendis consequatur tenetur maiores vero est vel. Officia ullam culpa eaque reprehenderit fuga ut odit, nemo esse dignissimos deserunt!
        Veniam voluptatem impedit, beatae hic ut atque obcaecati soluta dolor laudantium saepe doloremque debitis labore id placeat dolore numquam accusantium! Veritatis odit atque perferendis in, id assumenda repellat ullam quisquam?
        Delectus repudiandae enim itaque aliquam soluta non quidem asperiores ut vero quod! Maiores temporibus unde ipsum odio perferendis? Exercitationem doloremque voluptatum quibusdam dignissimos, obcaecati quae libero eius animi odit aliquam.
        Nihil temporibus delectus sapiente ea nam dolorem eum repudiandae voluptatibus, libero vero quaerat recusandae assumenda saepe quibusdam quidem veritatis iste, corporis blanditiis cum iusto aliquid? Autem pariatur at ex ratione!
        Non similique consequatur possimus alias neque voluptate in, consequuntur magnam asperiores odio dicta. Quasi laboriosam voluptates ut? Commodi repudiandae veritatis vitae, quisquam neque eveniet magnam quam. Quas eaque libero ullam!
        Error amet molestiae rem repellat magnam! Vero nesciunt tempore nisi suscipit rerum dolor ducimus, pariatur incidunt dolorum debitis ea possimus, est nemo ipsum natus error! Ipsa dignissimos tempora consectetur quod?
        Dolor aperiam eligendi exercitationem nobis vitae soluta excepturi nihil minima laboriosam odit provident voluptatem repudiandae debitis a natus accusantium, molestias sit repellat quibusdam fuga adipisci! Eos odit beatae dolorum provident.
        Distinctio optio necessitatibus veniam obcaecati ipsam rerum nisi porro similique blanditiis voluptate odit doloribus dolores quam quia asperiores, neque debitis aliquid nulla. Sapiente vitae similique nulla rem laborum facere corrupti!
      </Container >
    </>
  )
}

