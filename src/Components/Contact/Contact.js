import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_md63xlb', 'template_asd1ha8', form.current, 'Amcak7Tpn5maKifuh')
            .then((result) => {
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleOnSubmit = (e) => {
        alert('Thank You! \nYour Response has been Submitted Successfully \n');
    }

    return (
        <section className="contact" id="contact">
            <div data-aos="fade-up" className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contact-content">
                    <div data-aos="fade-right" className="column left">
                        <div className="text">Get in Touch</div>
                        <p>
                            Ready to turn your ideas into reality. Let's chat about your project and how I can create a
                            digital sulution tailored to your needs. Connect with me to start your online journey.</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Rushikesh Shivaji Biradar</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">PCCOE Pune, Maharashtra.</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email(Official)</div>
                                    <div className="sub-title">rushikesh.biradar21@pccoepune.org</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email(Personal)</div>
                                    <div className="sub-title">rushisb.55@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="column right">
                        <div className="text">Message me</div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Name" name="user_name" required />
                                </div>
                                <div className="field email">
                                    <input type="email" placeholder="Email" name="user_email" required />
                                </div>
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Subject" name="user_subject" required />
                            </div>
                            <div className="field textarea">
                                <textarea culs="30" rows="10" placeholder="Message.." name="message" required></textarea>
                            </div>
                            <div className="button-area">
                                <button onClick={handleOnSubmit} type="submit">Send Message</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


// College : 'service_md63xlb'  'template_asd1ha8'  'Amcak7Tpn5maKifuh'
// Personal : 'service_eif8pzh' 'template_y3vdh7x' 'vLC2S4hStmLBKRmE0'