import {motion, AnimatePresence} from "framer-motion"
import {useSnapshot} from "valtio"
import {headContentAnimation, headContainerAnimation, headTextAnimation, slideAnimation} from '../config/motion'
import state from "../store";
import { CustomButton } from "../components";


const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain"></img>
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden"></br> DO IT.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-sky-200 text-base">
                Creat your unique and exclusive tee with our
                brand-new 3D customization tool. <strong>
                  Unleash the imagination
                </strong>{" "}
                be Your own stylist
              </p>
              <CustomButton 
              type="filled" 
              title="Customize it" 
              handleClick={()=>state.intro=false} 
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"></CustomButton>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home