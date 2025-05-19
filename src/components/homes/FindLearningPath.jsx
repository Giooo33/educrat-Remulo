import { Link } from "react-router-dom";
import React from "react";

export default function FindLearningPath() {
  return (
    <section className="cta -type-1 layout-pt-lg layout-pb-lg">
      <div data-parallax="0.6" className="cta__bg">
        <div
          data-parallax-target
          className="bg-image js-lazy"
          style={{ backgroundImage: "url(/assets/img/home-2/cta/bg.png)" }}
        ></div>
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="text-45 md:text-30 text-white">
              Encontre o caminho de aprendizado certo para você
            </h2>
          </div>

          <div className="w-100"></div>

          <div className="col-lg-4 col-md-8">
            <p className="text-white mt-15">
              Combine seus objetivos com nossos programas, explore suas opções e trace seu caminho para o sucesso.
            </p>
          </div>

          <div className="w-100"></div>

          <div className="col-auto">
            <Link
              to="/courses-list-3"
              className="button -md -outline-white text-white mt-45 md:mt-20"
            >
              Comece agora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
