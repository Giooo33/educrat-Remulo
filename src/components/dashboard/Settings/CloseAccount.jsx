import React from "react";

export default function CloseAccount({ activeTab }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={`tabs__pane -tab-item-5 ${activeTab == 5 ? "is-active" : ""} `}
    >
      <form onSubmit={handleSubmit} className="contact-form row y-gap-30">
        <div className="col-12">
          <div className="text-16 fw-500 text-dark-1">Fechar conta</div>
          <p className="mt-10">
            Aviso: Se você fechar sua conta, será desinscrito de todos os seus 5 cursos e perderá o acesso para sempre.
          </p>
        </div>

        <div className="col-md-7">
          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            Digite a senha
          </label>

          <input required type="text" placeholder="Digite a senha" />
        </div>

        <div className="col-12">
          <button className="button -md -purple-1 text-white">
            Fechar Conta
          </button>
        </div>
      </form>
    </div>
  );
}
