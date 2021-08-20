import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [compagny, setCompagny] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameS = document.getElementById("name");
    let compagnyS = document.getElementById("compagny");
    let phoneS = document.getElementById("phone");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".formMessage");

    const isEmail = () => {
      let isMail = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    if (name && isEmail() && message) {
    
      const templateId = 'template_s4ez7pr';
      
      nameS.classList.remove("red");
      compagnyS.classList.remove("red");
      phoneS.classList.remove("red");
      emailS.classList.remove("red");
      messageS.classList.remove("red");

      formMess.innerHTML = "Message en cours d'envoi...";
      formMess.style.background = "#00c1ec";
      formMess.style.opacity = "1";

      // voir doc : https://www.emailjs.com/docs/examples/reactjs/
      emailjs
        .send(
          // your service ID
          "service_1d88iyo",
          // your template ID
          "template_s4ez7pr",
          {
            name,
            compagny,
            phone,
            email,
            message,
          },
          // your user ID (protégé par .env)
          process.env.REACT_APP_EMAILJS_KEY
        )
        .then(
          () => {
            formMess.innerHTML =
              "Message envoyé ! Je vous recontacterai dès que possible.";

            document.getElementById("name").classList.remove("error");
            document.getElementById("compagny").classList.remove("error");
            document.getElementById("phone").classList.remove("error");
            document.getElementById("email").classList.remove("error");
            document.getElementById("message").classList.remove("error");
            
            setName("");
            setCompagny("");
            setPhone("");
            setEmail("");
            setMessage("");

            setTimeout(() => {
              formMess.style.opacity = "0";
            }, 5000);
          },
          (err) => {
            console.log(err);
            formMess.style.background = "rgb(253, 87, 87)";
            formMess.innerHTML =
              "Une erreur s'est produite, veuillez réessayer.";
          }
        );
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.opacity = "1";

      if (!name) {
        nameS.classList.add("error");
      }
      if (!compagny) {
        compagnyS.classList.add("error");
      }
      if (!phone) {
        phoneS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  };

  return (
    <form className="contact-form">
      <h3>Contactez-moi</h3>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
        />
        <input
          type="text"
          id="compagny"
          name="compagny"
          required
          onChange={(e) => setCompagny(e.target.value)}
          placeholder="compagny ou entreprise *"
          value={compagny}
        />
        <input
          type="number"
          id="phone"
          name="phone"
          required
          onChange={(e) => setPhone(e.target.value)}
          placeholder="phone *"
          value={phone}
        />
        
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
          required
        />
      </div>
      <input
        className="formButton hover"
        type="submit"
        value="envoyer"
        onClick={(e) => handleSubmit(e)}
      />
      <div className="formMessage"></div>
    </form>
  );
};


export default ContactForm;