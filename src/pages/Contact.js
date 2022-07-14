import React from 'react';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import ButtonButtom from '../components/ButtonButton';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return(
        <main>
            <Mouse />
            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>Côte d'Ivoire, Abidjan</p>
                            <p>+225 Abidjan Abobo-Baoulé</p>
                        </div>
                    </div>

                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="+225 0789773695" className="hover">
                                <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {
                                    alert('Téléphone copié !');
                                }}>+225 0789773695</p>
                            </CopyToClipboard>
                        </div>
                    </div>

                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <CopyToClipboard text="guysylvestre876@gmail.com" className="hover">
                                <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {
                                    alert('Email copié !');
                                }}>guysylvestre876@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>PCODER - 2021, tous droit réservé</p>
                    </div>
                </div>
                <ButtonButtom left={'/project-4'} />
            </div> 
        </main>
    )
}

export default Contact;