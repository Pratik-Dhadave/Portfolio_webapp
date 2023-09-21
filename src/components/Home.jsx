import React from 'react';
import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight} from "react-icons/bs"

const Home = () => {
    const animation ={
        h1:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            },
        },
        button:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            },
        },
    };
  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animation.h1}>
                    Hi, I Am <br /> Pratik Dhadave
                </motion.h1> 
                <Typewriter options={{
                    strings: ['A Devloper' ,'A Coder'],
                    autoStart: true,
                    loop:true,
                    cursor:'',
                    wrapperClassName:"typerwriterpara",
                }}/>  
                <div>
                    <a href="mailto:pratik007ddd@gmail.com">
                        Hire me
                    </a>
                    <a href="#work">Projects <BsArrowUpRight /> </a>
                </div>  

                <article>
                    <p>
                        +<span>100</span>
                    </p>
                    <span>Clients Worldwide</span>
                </article> 

                <aside>
                    <article>
                        <p>
                            +<span>500</span>
                        </p>
                        <span>Projects Made</span>
                    </article> 
                </aside>         
            </div>
        </section>
        <section></section>
    </div>
  )
}

export default Home