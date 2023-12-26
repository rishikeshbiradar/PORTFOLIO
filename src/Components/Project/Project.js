import React from 'react'

import CourseConnect from "./Project_Images/CourseConnect.png"
import EchoCare from "./Project_Images/EchoCare.jpeg"
import NoteNook from "./Project_Images/NoteNook.jpg"
import AeroBook from "./Project_Images/AeroBook.webp"
import BookBorrower from "./Project_Images/BookBorrower.jpeg"
import TeslaBotAI from "./Project_Images/TeslaBotAI.jpeg"
import Password_Generator from "./Project_Images/Password_Generator.jpg"
import Calculator from "./Project_Images/Calculator.png"
import TaskTracer from "./Project_Images/TaskTracer.jpg"
import Link from "./Project_Images/Link.png"

export default function Project() {
    return (
        <section className="projects" id="projects">
            <div data-aos="fade-up" className="max-width">
                <h2 className="title">My Projects</h2>
                <div className="carousel owl-carousel">
                    <div className="card">
                        <div className="box">
                            <img src={CourseConnect} alt="" />
                            <div className="text"><a className="projectTitle" href="/" rel="noreferrer" target="_blank">CourseConnect</a></div>
                            <div className="project_buttons">
                                <div className="buttons">
                                    <button className="btn">React JS</button>
                                    <button className="btn">Node JS</button>
                                    <button className="btn">Express JS</button>
                                    <button className="btn">MongoDB</button>
                                    <button className="btn">Machine Learning</button>
                                </div>
                                <div className="project_links">
                                    <a href="https://github.com/rishikeshbiradar/CourseConnect" rel="noreferrer" target="_blank"><i
                                        className="project_github_link fab fa-lg fa-github "></i></a>
                                    <a href="/" rel="noreferrer" target="_blank"><img src={Link} alt=""
                                        style={{ height: "25px", width: "25px", margin: "5px" }} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <img src={EchoCare} alt="" />
                            <div className="text"><a className="projectTitle" href="https://vbprs.netlify.app/"
                                rel="noreferrer" target="_blank">EchoCare</a></div>
                            <div className="project_buttons">
                                <div className="buttons">
                                    <button className="btn">Selenium</button>
                                    <button className="btn">Node JS</button>
                                    <button className="btn">Express JS</button>
                                    <button className="btn">MongoDB</button>
                                    <button className="btn">Machine Learning</button>
                                </div>
                                <div className="project_links">
                                    <a href="https://github.com/rishikeshbiradar/EchoCare" rel="noreferrer" target="_blank"><i
                                        className="project_github_link fab fa-lg fa-github"></i></a>
                                    <a href="https://vbprs.netlify.app/" rel="noreferrer" target="_blank"><img src={Link}
                                        alt="" style={{ height: "25px", width: "25px", margin: "5px" }} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <img src={NoteNook} alt="" />
                            <div className="text"><a className="projectTitle" href="https://workscheduler.netlify.app/"
                                rel="noreferrer" target="_blank">NoteNook</a></div>
                            <div className="project_buttons">
                                <div className="buttons">
                                    <button className="btn">React JS</button>
                                    <button className="btn">Node JS</button>
                                    <button className="btn">Express JS</button>
                                    <button className="btn">MongoDB</button>
                                </div>
                                <div className="project_links">
                                    <a href="https://github.com/rishikeshbiradar/NoteNook" rel="noreferrer" target="_blank"><i
                                        className="project_github_link fab fa-lg fa-github"></i></a>
                                    <a href="https://workscheduler.netlify.app/" rel="noreferrer" target="_blank"><img
                                        src={Link} alt=""
                                        style={{ height: "25px", width: "25px", margin: "5px" }} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <img src={AeroBook} alt="" />
                            <div className="text"><a className="projectTitle" href="/" rel="noreferrer" target="_blank">AeroBook</a></div>
                            <div className="project_buttons">
                                <div className="buttons">
                                    <button className="btn">C++</button>
                                    <button className="btn">OOP</button>
                                    <button className="btn">DSA</button>
                                </div>
                                <div className="project_links">
                                    <a href="https://github.com/rishikeshbiradar/AeroBook" rel="noreferrer" target="_blank"><i
                                        className="project_github_link fab fa-lg fa-github" style={{ color: "white" }}></i></a>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="card">
                        <div className="box">
                            <img src={BookBorrower} alt="" />
                            <div className="text"><a className="projectTitle" href="/" rel="noreferrer" target="_blank">BookBorrower</a></div>
                            <div className="project_buttons">
                                <div className="buttons">
                                    <button className="btn">Python</button>
                                    <button className="btn">OOP</button>
                                    <button className="btn">DSA</button>
                                </div>
                                <div className="project_links">
                                    <a href="https:/github.com/rishikeshbiradar/BookBorrower" rel="noreferrer" target="_blank"> <i className="project_github_link fab fa-lg fa-github" style={{ color: "white" }}></i></a>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="card">
                        <div className="box">
                            <img src={TeslaBotAI} alt="" />
                            <div className="text"><a className="projectTitle" href="/" rel="noreferrer" target="_blank">TeslaBotAI</a></div>
                            <div className="project_buttons">
                                <div className="buttons">
                                    <button className="btn">Python</button>
                                    <button className="btn">Artificial Intelligence</button>
                                </div>
                                <div className="project_links">
                                    <a href="https://github.com/rishikeshbiradar/TeslaBotAI" rel="noreferrer" target="_blank"><i
                                        className="project_github_link fab fa-lg fa-github" style={{ color: "white" }}></i></a>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="card">
                        <div className="box">
                            <img src={TaskTracer} alt="" />
                            <div className="text"><a className="projectTitle" href="https://todulist555.web.app"
                                rel="noreferrer" target="_blank">TaskTracer</a></div>
                            <div className="project_buttons">
                                <div className="buttons">
                                    <button className="btn">HTML</button>
                                    <button className="btn">CSS</button>
                                    <button className="btn">JavaScript</button>
                                    <button className="btn">JQuery</button>
                                </div>
                                <div className="project_links">
                                    <a href="https://github.com/rishikeshbiradar/TaskTracer" rel="noreferrer" target="_blank"><i
                                        className="project_github_link fab fa-lg fa-github"></i></a>
                                    <a href="https://todulist555.web.app" rel="noreferrer" target="_blank"><img
                                        src={Link} alt=""
                                        style={{ height: "25px", width: "25px", margin: "5px" }} /></a>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="card">
                        <div className="box">
                            <img src={Password_Generator} alt="" />
                            <div className="text"><a className="projectTitle" href="https://passwordgenerator5.web.app/"
                                rel="noreferrer" target="_blank">Password Generator</a></div>
                            <div className="project_buttons">
                                <div className="buttons">
                                    <button className="btn">HTML</button>
                                    <button className="btn">CSS</button>
                                    <button className="btn">JavaScript</button>
                                    <button className="btn">JQuery</button>
                                </div>
                                <div className="project_links">
                                    <a href="https://github.com/rishikeshbiradar/Password-Generator" rel="noreferrer" target="_blank"><i
                                        className="project_github_link fab fa-lg fa-github"></i></a>
                                    <a href="https://passwordgenerator5.web.app/" rel="noreferrer" target="_blank"><img
                                        src={Link} alt=""
                                        style={{ height: "25px", width: "25px", margin: "5px" }} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <img src={Calculator} alt="" />
                            <div className="text"><a className="projectTitle" href="https://freeonlinecalculator-96b65.web.app/"
                                rel="noreferrer" target="_blank">Calculator</a></div>
                            <div className="project_buttons">
                                <div className="buttons">
                                    <button className="btn">HTML</button>
                                    <button className="btn">CSS</button>
                                    <button className="btn">JavaScript</button>
                                    <button className="btn">JQuery</button>
                                </div>
                                <div className="project_links">
                                    <a href="https://github.com/rishikeshbiradar/Calculator" rel="noreferrer" target="_blank"><i
                                        className="project_github_link fab fa-lg fa-github"></i></a>
                                    <a href="https://freeonlinecalculator-96b65.web.app/" rel="noreferrer" target="_blank"><img
                                        src={Link} alt=""
                                        style={{ height: "25px", width: "25px", margin: "5px" }} /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    )
}
