import React from "react";

export default function GetAppSix() {
  return (
    <section className="section-bg pt-80 pb-80 lg:pt-60 lg:pb-60 mb-80">
      <div className="section-bg__item bg-light-7"></div>
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-xl-5 col-lg-6 col-md-10">
            <div className="pl-60 lg:pl-0">
              <h2 className="text-30 lh-12">Baixe o aplicativo</h2>
              <p className="mt-30">
                Novos recursos. Nova aparência. Sem riscos
                <br className="lg:d-none" /> e sem necessidade de cartão de crédito.
              </p>
              <div className="app-content__buttons mt-30">
                <a href="#">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/1.svg"
                    alt="botão"
                  />
                </a>
                <a href="#">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/2.svg"
                    alt="botão"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <img
              style={{ height: "100%", width: "100%" }}
              src="/assets/img/home-6/app/1.png"
              alt="imagem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
