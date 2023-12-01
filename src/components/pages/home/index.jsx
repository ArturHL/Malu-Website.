import './index.css'

import { PiUserCircleDuotone } from "react-icons/pi";
import { PiPhoneFill } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <section className='principalSection'>
        <h1>El mejor Pozole de CDMX</h1>
        <p>
          Con mas de 30 años de experiencia preparando este delicioso
          platillo, te ofrecemos el mejor sabor y calidad en cada uno de
          nuestros productos.
        </p>
      </section>
      <section className='promoSlider'>
        <h2 className='title'>¡Promociones!</h2>
        <div className='promoContainer'>
          <img src='/Screenshot 2023-11-29 011326.png' alt='promo' />
        </div>
      </section>
      <section className='menuSection'>
        <h2 className='title'>Menú</h2>
        <div className='menuContainer'>
          <div className='menuCard'>
            <img src='https://gastromexi.com/wp-content/uploads/2018/06/pozolerojo-1000x658.jpg' alt='menu' />
            <div className='infoContainer'>
              <h2>Pozole Rojo <span className='price'>$89</span></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptates.
              </p>
            </div>
            <div className='callToAction'>
              <button>Compra en 1 Click</button>
              <button>Agregar al Carrito</button>
            </div>
          </div>
          <div className='menuCard'>
            <img src='https://www.vvsupremo.com/wp-content/uploads/2020/02/Deep-Fried-Cheese-Quesadillas.jpg' alt='menu' />
            <div className='infoContainer'>
              <h2>Quesadilla Sencilla <span className='price'>$37</span></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptates.
              </p>
            </div>
            <div className='callToAction'>
              <button>Compra en 1 Click</button>
              <button>Agregar al Carrito</button>
            </div>
          </div>
        </div>
        <p className='redirection'>Puedes ver nuestro menu completo <span>Aqui</span></p>
      </section>
      <section className='reviewsSection'>
        <h2 className='title'>Lo que dicen nuestros clientes</h2>
        <div className='reviewsContainer'>
          <div className='review'>
            <PiUserCircleDuotone />
            <div className='infoContainer'>
              <p>Alejandro Perez.</p>
              <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptates.&quot;
              </p>
            </div>
          </div>
          <div className='review'>
            <PiUserCircleDuotone />
            <div className='infoContainer'>
              <p>Alejandro Perez.</p>
              <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptates.&quot;
              </p>
            </div>
          </div>
          <div className='review'>
            <PiUserCircleDuotone />
            <div className='infoContainer'>
              <p>Alejandro Perez.</p>
              <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptates.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='locationSection'>
        <h2 className='title'>Ubicación y Contacto</h2>
        <div className='locationContainer'>
          <div className='locationMap'>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.158247345831!2d-99.14876932418888!3d19.362299442921067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffb5575f3263%3A0xb90ede229e5a09f2!2sAntojitos%20Mal%C3%BA!5e0!3m2!1ses-419!2smx!4v1701382575092!5m2!1ses-419!2smx" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='locationInfo'>
            <h2>Portales Norte</h2>
            <p>
              Bélgica 815 col. Portales Nte Del, Benito Juárez, 03300 CDMX
            </p>
            <div className='contactInfo'>
              <p className='contactOption'>
                <PiPhoneFill/> Tel: 55 5555 5555
              </p>
              <p className='contactOption'>
                <PiPhoneFill/> Tel: 55 5555 5555
              </p>
              {/* https://wa.me/1XXXXXXXXXX */}
              <a className='whatsAppChat' href="https://wa.me/5532019274"><FaWhatsapp/> Chatea con Nosotros</a>
          </div>
          </div>
        </div>
      </section>
      <section className='footer'>
        <img src="/Logo 2017.png" alt="" className='logo'/>
        <div className='footerLinks'>
          <a href="">Inicio</a>
          <a href="">Menu</a>
          <a href="">Contacto</a>
        </div>
        <div className='appsLinks'>
          <div className='linksSection'>
            <h4>Encuentranos en:</h4>
            <div>
              <a href=""><img src="data:image/png;base64,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" alt=""/>Didi Food</a>
              <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrwX_DcPOTxx5PaXPnzF-U7oCZsZgkMcjyw&usqp=CAU" alt=""/>Rappi</a>
              <a href=""><img src="https://play-lh.googleusercontent.com/kDzXydb6ZT4LUj0RiU-GyptnVgCzzk9snN1FVxj2YfqFb4PpRdQRBKzdz4jzUOxAS9-d=w240-h480-rw" alt=""/>Uber Eats</a>
            </div>
          </div>
          <div className='linksSection'>
            <h4>Siguenos en:</h4>
            <div>
              <a href=""><img src="/facebook.png" alt=""/>Facebook</a>
              <a href=""><img src="/instagram.png" alt=""/>Instagram</a>
              <a href=""><img src="data:image/png;base64,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" alt=""/>Tiktok</a>
            </div>
          </div>
          <div className='linksSection'>
            <h4>Descarga nuestra app</h4>
            <div>
              <a href="">App Store<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png" alt=""/></a>
              <a href="">Play Store<img src="https://static.vecteezy.com/system/resources/previews/022/484/511/non_2x/google-play-store-icon-logo-symbol-free-png.png" alt=""/></a>
            </div>
          </div>
        </div>
        <p style={{padding: 5}}>© 2023 Antojitos Malú. Todos los derechos reservados.</p>
      </section>
    </>
  )
}

export default HomePage