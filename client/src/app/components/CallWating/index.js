import styles from "./CallWating.module.css"
import { SocketContext } from '../../contexts/Context';
import { useContext, useEffect } from "react";
import { motion } from "framer-motion"

function CallWating() {
    const { call, answerCall } = useContext(SocketContext);

    useEffect(() => {
        // const audio = new Audio('/ring.mp3');
        // audio.play()
    }, [])

    return (
        <motion.div
            initial={{ y: '-100vh' }}
            animate={{ y: '20vh', x: 0 }}
            transition={{ duration: 0.5 }}
            className={"absolute z-40 top-1/2 md:top-48 w-full flex justify-center left-0" + styles.wrapper}
        >
            <div className="flex p-6 items-center rounded-xl bg-gray-900">
                <audio src="/ring.mp3" autoPlay loop></audio>
                <p className="text-gray-400 w-48"><span className="font-semibold">{call?.name}</span> is calling you!</p>
                <button onClick={answerCall} className="text-gray-300 px-5 cursor-pointer rounded-lg ml-4 bg-gray-800 py-2">Answer</button>
            </div>
        </motion.div>
    )
}

export default CallWating
