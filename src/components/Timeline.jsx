import React from 'react'
// import {Carousel} from "react-responsive-carousel"
import data from "../assets/data.json"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
const Timeline = () => {
  return (
    <div id="timeline">
        <h2>EXPERIENCE</h2>
        <section>
            <article>
                {/* <Carousel
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                interval={2000}
                infiniteLoop={true}
                autoPlay={true}
                > */}

                    {
                        data.experience.map((i)=>(
                            <div kay ={i.title} className='workItem'>
                                {/* <img src={i.imgSrc} alt={i.title} /> */}
                                <section>
                                    <h2>{i.title}</h2>
                                    <h3>{i.name}</h3>
                                    <p>{i.description}</p>
                                    <a target={"blank"} href={i.imgSrc}>
                                        View Demo
                                    </a>
                                </section>
                            </div>
                        ))
                    }
                {/* </Carousel> */}
            </article>
        </section>
    </div>
  );
};

export default Timeline