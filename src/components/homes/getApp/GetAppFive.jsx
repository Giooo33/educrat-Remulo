import React from "react";

import { Link } from "react-router-dom";
export default function GetAppFive() {
  return (
    <section className="layout-pt-lg layout-pb-lg ">
      <div className="container">
        <div className="row y-gap-20 items-center">
          <div
            className="col-xl-7 col-lg-7"
            data-aos="fade-up"
            data-aos-duration={300}
          >
            <div className="app-image">
              <img src="/assets/img/home-5/apps/img.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="app-content">
              <h2 className="app-content__title" data-aos="fade-up">
                Aprenda
                <br /> <span>de qualquer lugar</span>
              </h2>
              <p className="app-content__text" data-aos="fade-up">
                Faça aulas em qualquer lugar com o aplicativo AlvoEdu.
                Transmita ou baixe para assistir no avião, no metrô ou onde você aprender melhor.
              </p>
              <div className="app-content__buttons">
                <Link data-aos="fade-up" data-aos-duration={400} to="#">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/1.svg"
                    alt="botão"
                  />
                </Link>
                <Link data-aos="fade-up" data-aos-duration={400} to="#">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/2.svg"
                    alt="botão"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
