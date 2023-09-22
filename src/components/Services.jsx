import React from 'react'
import {motion} from "framer-motion"
import {AiFillIeCircle, AiFillAndroid, AiFillWindows} from 'react-icons/ai'
const Services = () => {
    const animations = {
        whileInView: {
          x: 0,
          y: 0,
          opacity: 1,
        },
        one: {
          opacity: 0,
          x: "-100%",
        },
        two: {
          opacity: 0,
          x: "100%",
        },
      };
  return (
    <div id='services'>
        <h2>Services</h2>
        <section>
            <motion.div className='serviceBox1'
                      whileInView={animations.whileInView}
                      initial={animations.one}>
                <h3>Fresher</h3>
                <p>7 months Expericence</p>
            </motion.div>
            <motion.div className='serviceBox2'
                      whileInView={animations.whileInView}
                      initial={animations.two}>
                <AiFillIeCircle />
                <span>Web Devlopment</span>
            </motion.div>

        </section>
    </div>
  )
}

export default Services