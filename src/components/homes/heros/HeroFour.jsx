import gsap from "gsap";

import { Link } from "react-router-dom";

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function HeroFour() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const parallaxIt = () => {
      const target = document.querySelectorAll(".js-mouse-move-container");

      target.forEach((container) => {
        const targets = container.querySelectorAll(".js-mouse-move");

        targets.forEach((el) => {
          const movement = el.getAttribute("data-move");

          document.addEventListener("mousemove", (e) => {
            const relX = e.pageX - container.offsetLeft;
            const relY = e.pageY - container.offsetTop;

            gsap.to(el, {
              x:
                ((relX - container.offsetWidth / 2) / container.offsetWidth) *
                Number(movement),
              y:
                ((relY - container.offsetHeight / 2) / container.offsetHeight) *
                Number(movement),
              duration: 0.2,
            });
          });
        });
      });
    };

    parallaxIt();
  }, []);
  return (
    <section className="masthead -type-3 bg-light-6 js-mouse-move-container">
      <div className="container">
        <div className="row y-gap-30 items-center justify-center">
          <div
            className="col-xl-7 col-lg-11 relative z-5"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="masthead__content pl-32 lg:pl-0">
              <h1 className="masthead__title">
                Encontre seus
                <br /> <span className="text-purple-1">Cursos</span> Preferidos & Melhore
                suas Habilidades
              </h1>

              <p className="masthead__text text-17 text-dark-1 mt-25">
                Desenvolva habilidades com cursos, certificados e graduações online de
                <br className="lg:d-none" />
                universidades e empresas de renome mundial.
              </p>

              <div className="masthead-search mt-30">
                <div className="masthead-search__form">
                  <form onSubmit={handleSubmit}>
                    <input
                      required
                      type="text"
                      placeholder="O que você quer aprender hoje?"
                    />

                    <button
                      className="button -purple-1 text-white"
                      onClick={() => navigate("/courses-list-2")}
                    >
                      <i className="icon icon-search"></i>
                    </button>
                  </form>
                </div>

                <div className="masthead-search__searches mt-40">
                  Busca em alta:
                  <Link to={`/courses/${6}`}>Desenvolvimento</Link>,
                  <Link to="/courses-single-2/3">Negócios</Link>,
                  <Link to="/courses-single-6/3">Design</Link>,
                  <a href="#">Marketing</a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-5 col-lg-7 relative z-2"
            data-aos="fade-up"
            data-aos-delay="750"
          >
            <div className="masthead-image">
              <div className="masthead-image__img1">
                <div className="masthead-image__shape xl:d-none">
                  <img
                    src="/assets/img/home-4/masthead/shape.svg"
                    alt="imagem"
                  />
                </div>
                <img
                  data-move="20"
                  className="js-mouse-move"
                  src="/assets/img/home-4/masthead/1.png"
                  alt="imagem"
                />
              </div>

              <div className="masthead-image__el1">
                <div
                  data-move="40"
                  className="lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
                >
                  <div className="size-50 d-flex justify-center items-center bg-red-2 rounded-full">
                    <img src="/assets/img/masthead/1.svg" alt="ícone" />
                  </div>
                  <div className="ml-20">
                    <div className="text-orange-1 text-16 fw-500 lh-1">
                      3.000 +
                    </div>
                    <div className="mt-3">Cursos Gratuitos</div>
                  </div>
                </div>
              </div>

              <div className="masthead-image__el2">
                <div
                  data-move="40"
                  className="shadow-4 img-el -w-260 px-40 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
                >
                  <div className="img-el__side">
                    <div className="size-50 d-flex justify-center items-center bg-dark-1 rounded-full">
                      <img src="/assets/img/masthead/2.svg" alt="ícone" />
                    </div>
                  </div>
                  <div className="">
                    <div className="text-purple-1 text-16 fw-500 lh-1">
                      Parabéns!
                    </div>
                    <div className="mt-3">Sua matrícula foi concluída</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
