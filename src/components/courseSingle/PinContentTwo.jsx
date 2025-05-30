import React, { useState, useEffect } from "react";
import { useContextElement } from "@/context/Context";
import ModalVideoComponent from "../common/ModalVideo";

export default function PinContentTwo({ pageItem }) {
  const { isAddedToCartCourses, addCourseToCart } = useContextElement();
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // useEffect hook to update the screen width when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        id="js-pin-content"
        style={
          screenWidth < 991
            ? { height: "fit-content", right: "0%" }
            : { height: "100%", right: "7%" }
        }
        className="courses-single-info js-pin-content"
      >
        <div
          style={{ position: "sticky", top: "200px" }}
          className="bg-white shadow-2 rounded-8 border-light py-10 px-10"
        >
          <div className="courses-single-info__content scroll-bar-1 pt-30 pb-20 px-20">
            <div className="d-flex justify-between items-center mb-30">
              {pageItem.paid ? (
                <>
                  <div className="text-24 lh-1 text-dark-1 fw-500">
                    R${pageItem.discountedPrice}
                  </div>
                  <div className="lh-1 line-through">
                    R${pageItem.originalPrice}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-24 lh-1 text-dark-1 fw-500">Grátis</div>
                  <div></div>
                </>
              )}
            </div>

            <button
              className="button -md -purple-1 text-white w-1/1"
              onClick={() => addCourseToCart(pageItem.id)}
            >
              {isAddedToCartCourses(pageItem.id)
                ? "Já adicionado"
                : "Adicionar ao carrinho"}
            </button>
            <button className="button -md -outline-dark-1 text-dark-1 w-1/1 mt-10">
              Comprar agora
            </button>

            <div className="text-14 lh-1 text-center mt-30">
              Garantia de devolução em 30 dias
            </div>

            <div className="mt-25">
              <div className="d-flex justify-between py-8 ">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-video-file"></div>
                  <div className="ml-10">Aulas</div>
                </div>
                <div>20</div>
              </div>

              <div className="d-flex justify-between py-8 border-top-light">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-puzzle"></div>
                  <div className="ml-10">Questionários</div>
                </div>
                <div>3</div>
              </div>

              <div className="d-flex justify-between py-8 border-top-light">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-clock-2"></div>
                  <div className="ml-10">Duração</div>
                </div>
                <div>13 Horas</div>
              </div>

              <div className="d-flex justify-between py-8 border-top-light">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-bar-chart-2"></div>
                  <div className="ml-10">Nível</div>
                </div>
                <div>Iniciante</div>
              </div>

              <div className="d-flex justify-between py-8 border-top-light">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-translate"></div>
                  <div className="ml-10">Idioma</div>
                </div>
                <div>Inglês</div>
              </div>

              <div className="d-flex justify-between py-8 border-top-light">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-badge"></div>
                  <div className="ml-10">Certificado</div>
                </div>
                <div>Sim</div>
              </div>

              <div className="d-flex justify-between py-8 border-top-light">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-infinity"></div>
                  <div className="ml-10">Acesso vitalício</div>
                </div>
                <div>Sim</div>
              </div>
            </div>

            <div className="d-flex justify-center pt-15">
              <a
                href="#"
                className="d-flex justify-center items-center size-40 rounded-full"
              >
                <i className="fa fa-facebook"></i>
              </a>

              <a
                href="#"
                className="d-flex justify-center items-center size-40 rounded-full"
              >
                <i className="fa fa-twitter"></i>
              </a>

              <a
                href="#"
                className="d-flex justify-center items-center size-40 rounded-full"
              >
                <i className="fa fa-instagram"></i>
              </a>

              <a
                href="#"
                className="d-flex justify-center items-center size-40 rounded-full"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ModalVideoComponent
        videoId={"LlCwHnp3kL4"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
