const Contacto = (props) => {
    return (
        <div class="container-fluid" id="contacto">
        <div class="row con">
          <h2 class="text-center" id="datos">Datos de Contacto</h2>
          <div class="col">
            <div class="cont">
              <ul class="contf">
                <li class="contf"><b>Whatsapp</b> : +54 11 6960-0225</li>
                <li class="contf">
                  <b>Instagram</b>: https://www.instagram.com/tuconexion88
                </li>
                <li class="contf"><b>Direccion</b>: Bartolome mitre 2296</li>
              </ul>
            </div>
          </div>
          <div class="col">
          <iframe
              class="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8278105583763!2d-58.3990046!3d-34.6085154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccae941056d57%3A0xe766fedfaa0f4f28!2sBartolom%C3%A9%20Mitre%202296%2C%20C1039%20AAJ%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1660762183327!5m2!1ses-419!2sar"
              width="600"
              height="450"
              
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="row forms">
          <div class="col">
            <h2 class="text-center">Formulario de Contacto</h2>
            <form class="row g-3">
              <div class="col-md-12">
                <label for="inputnombre" class="form-label"
                  >Nombre y apellido</label
                >
                <input
                  type="text"
                  class="form-control bg-dark white"
                  id="inputnombre"
                  placeholder="ingrese su nombre"
                  required
                />
              </div>

              <div class="col-12">
                <label for="inputemail" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control bg-dark white"
                  id="inputemail"
                  placeholder="xxxx@gmail.com"
                  required
                />
              </div>
              <div class="col-12">
                <label for="inputcelular" class="form-label">Celular</label>
                <input
                  type="tel"
                  class="form-control bg-dark white"
                  id="inputcelular"
                  placeholder="ingrese su numero"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="inputcomentarios" class="form-label">
                  Comentarios y/o Sugerencias</label
                >
                <textarea
                  class="bg-dark"
                  id="inputcomentarios"
                  cols="25"
                  rows="5"
                ></textarea>
              </div>
              <div class="col-12 enviar">
                <button type="submit" class="btn btn-primary">Enviar</button>
              </div>
            </form>
          </div>

          <div class="row">
            <div class="col">
              <div class="what" id="whats">
                <a href="https://walink.co/7c3d4d" target="_blank"
                  ><img
                    src="./images/whatsppicon.png"
                    alt="what"
                /></a>
              </div>
            </div>
            <div class="col">
              <div class="insta" id="instas">
                <a
                  href="https://www.instagram.com/tuconexion88/"
                  target="_blank"
                  ><img
                    src="./images/instagram.png"
                    alt="what"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
            );
            }

export default Contacto;