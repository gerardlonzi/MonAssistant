import * as motion from "motion/react-client"

export default function Keyframes() {
    return (
        <motion.div
            animate={{
                scale:[1,1,0.8,0.8],
                borderRadius: ["0%", "0%", "50%", "50%"],
                bottom:["0","0","50%","50%"]
            }}
            transition={{
                duration: 1,
                ease: "easeIn",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 5,
                
            }}
            style={box}
        />
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
{/* <div className=" bg-[#00275b] size-[300px] -z-5 rounded-tl-[100px] absolute right-24 bottom-0 bk-black"></div> */}
