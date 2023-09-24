import React,{useState} from 'react'
import vg from "../assets/vg.png"
import toast from "react-hot-toast"
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandle = (e)=>{
    e.preventDefault();
    console.log(name,email,message);
    toast.success("Message Sent");
  }
  return (
    <div id='contact'>
        <section>
            <form onSubmit={submitHandle}>
                <h2>Contact Me</h2>
                <input 
                type="text" 
                value={name} 
                onChange={(e)=>setName(e.target.value)} 
                placeholder='Your Name' required />
                <input 
                type="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder='Your Email'/>
                <input 
                type="text"
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}  
                placeholder='Your Message' required />

                <button type="submit">send</button>
            </form>
        </section>
        <aside>
            <img src={vg} alt="Graphics" />
        </aside>
    </div>
  )
}

export default Contact