import * as motion from "motion/react-client"

export default function Keyframes() {
    return (
        <>
        <motion.div
            animate={{
                scale:[1,1,0.6,0.6],
                borderRadius: ["0%", "0%", "50%", "50%"],
                bottom:["0","0","50%","50%"]
            }}
            transition={{
                duration: 1,
                ease: "easeIn",
                times: [0, 0.2, 0.5, 0.8],
                repeat: Infinity,
                repeatDelay: 5,
                
            }}
            style={box}
        />
        <motion.div
            animate={{
                height:[500,500,400,400]
            }}
            transition={{
                duration: 1,
                ease: "easeIn",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 5,
                
            }}
            style={box2}
        />
        </>
    )
}


const box = {
    width: 300,
    height: 300,
    backgroundColor: "#00275b",
    borderRadius: 50,
    zIndex:-5,
    position: "absolute",
    right:110,
    bottom:0

}
const box2 = {
    width: 320,
    height: 500,
    backgroundColor: "#00a63e",
    borderRadius: 50,
    zIndex:-7,
    position: "absolute",
    bottom:0,
    left:0
    
}
{/* <div className="w-72 bg-green-600 -z-10 rounded-tl-[100px] h-full  absolute bottom-0 right-11 bk-green"></div> */}
