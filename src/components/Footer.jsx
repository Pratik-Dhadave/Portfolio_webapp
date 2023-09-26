import React from 'react'
import {
    AiFillGithub,
    AiOutlineArrowUp,
    AiFillLinkedin,
  } from "react-icons/ai";
import pratik from "../assets/Pratik_Linkedin.png"
const Footer = () => {
  return (
    <footer>
        <div>
            <img src={pratik} alt="Founder" />
            <h2>Pratik Dhadave</h2>
            <p>People don’t care about what you say, they care about what you build</p>
        </div>
        <aside>
            <h2>Social Media</h2>

            <article>
                <a href="https://linkedin.com/in/pratik-dhadave" target={"blank"}>
                <AiFillLinkedin />
                </a>
                <a href="https://github.com/Pratik-Dhadave" target={"blank"}>
                <AiFillGithub />
                </a>
                {/* <a href="https://youtube.com/6packprogrammer" target={"blank"}>
                <AiFillYoutube />
                </a> */}
            </article>
        </aside>
        <a href="#home"> 
            <AiOutlineArrowUp /> 
        </a>
    </footer>
  )
}

export default Footer