const Carro = (props) => {
    return (
        <div className="row">
        <div className="col">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="https://p2.piqsels.com/preview/572/30/566/tarot-cards-fortune-symbol.jpg"
                  className="d-block w-100 foto1  "
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block titulo">
                  <h5 id="puto1">Hakuna Matata</h5>
                  <p id="puto">Una Forma de ser.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <img src="./images/fotolore1.jpeg" className="d-block w-100 foto1"
                alt=" ..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5 id="puto1">Hakuna Matata</h5>
                  <p id="puto">Nada que aprender.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <img
                  src="./images/fotolore2.jpeg"
                  className="d-block w-100 foto1"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 id="puto1">Sin Preocuparse</h5>
                  <p id="puto">Asi es como hay que vivir.</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

    );
}
export default Carro;