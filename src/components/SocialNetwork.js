import React from 'react';

const SocialNetwork = () => {

  const anim = () => {
    let navlinks = document.querySelectorAll('.social-network a');

    navlinks.forEach(link => {
      link.addEventListener('mouseover', (e) => {
        console.log('yes');
        let attrX = e.offsetX - 20;
        let attrY = e.offsetY - 13;

        link.style.transform = "translate(${attrX}px, ${attrY}px)";
      })

      link.addEventListener('mouseleave', () => {
        link.style.transform = '';
      })
    })
  }

  return (
    <div className="social-network">
      <ul className="content">
        <a href="https://web.facebook.com/danhoguysylvestre.krakou.9" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
          <li><i className="fab fa-facebook-f"></i></li>
        </a>
        <a href="https://www.linkedin.com/in/krakou-danho-guy-sylvestre-069339178/" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
          <li><i class="fab fa-linkedin"></i></li>
        </a>
        <a href="https://www.instagram.com/guyguysylvestre/" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
          <li><i className="fab fa-instagram"></i></li>
        </a>
      </ul>
    </div>
  )
}

export default SocialNetwork;
