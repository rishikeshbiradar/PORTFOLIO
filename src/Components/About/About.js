import React from 'react'
import Profile_Photo from "./Profile_Photo.jpg"

export default function About() {
  return (
    <section data-aos="fade-up" className="about" id="about">
    <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
            <div data-aos="fade-right" className="column left">
                      <img src={Profile_Photo} alt="" />
                      
            </div>
            <div data-aos="fade-left" className="column right">
                <div className="text">I'm Rushikesh & I'm <span className="typing-2"></span></div>
                <p>Greetings! I'm Rushikesh Shivaji Biradar, currently pursuing B.Tech in Computer Science &
                    Engineering with specialization in Artificial Intelligence & Machine Learning at Pimpri
                    Chichwad College Of Engineering (PCCOE),Pune. A passionate and dedicated Software Developer &
                    Full Stack Developer
                    with a flair for crafting innovative and user-centric sulutions. Throughout my career, I've been
                    driven by the desire to create seamless and robust web applications that make a positive impact
                    on users and businesses alike.</p>
                <a href="https://drive.google.com/file/d/1JXlBL_H5JHMz1Js9pFfuDiOz75mEKzX8/view?usp=sharing"  rel="noreferrer"
                    target="_blank">Download Resume</a>
            </div>
        </div>
    </div>
</section>
  )
}
