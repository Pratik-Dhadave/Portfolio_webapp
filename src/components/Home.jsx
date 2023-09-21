import React,{useRef} from 'react';
import {animate, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs";
import me from "../assets/Pratik.png"
// import { useRef } from 'react';

const Home = () => {
    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientsCount = () =>{
        animate(0,100, {
            duration:1,
            onUpdate:(v)=>(clientCount.current.textContent = v.toFixed()),
        });
    };

    const animationProjectsCount = () =>{
        animate(0,10, {
            duration:3,
            onUpdate:(v)=>(projectCount.current.textContent = v.toFixed()),
        });
    };

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
                        Hire Me
                    </a>
                    <a href="#work">Projects <BsArrowUpRight /> </a>
                </div>  

                <article>
                    <p>
                        +<motion.span 
                        whileInView={animationClientsCount} 
                        ref={clientCount}
                        >
                        </motion.span>
                    </p>
                    <span>Clients Worldwide</span>
                </article> 

                <aside>
                    <article>
                        <p>
                            +<motion.span 
                            whileInView={animationProjectsCount} 
                            ref={projectCount}
                            ></motion.span>
                        </p>
                        <span>Projects Done</span>
                    </article>
                    <article data-special>
                        <p>Contact</p>
                        <span>pratik007ddd@gmail.com</span>
                    </article> 
                </aside>         
            </div>
        </section>
        <section>
            <img src={me} alt="Pratik" />
        </section>
        <BsChevronDown />
    </div>
  )
}

export default Home