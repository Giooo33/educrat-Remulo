import React from "react";

export default function Password({ activeTab }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={`tabs__pane -tab-item-2 ${activeTab == 2 ? "is-active" : ""} `}
    >
      <form onSubmit={handleSubmit} className="contact-form row y-gap-30">
        <div className="col-md-7">
          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            Senha atual
          </label>

          <input required type="text" placeholder="Senha atual" />
        </div>

        <div className="col-md-7">
          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            Nova senha
          </label>

          <input required type="text" placeholder="Nova senha" />
        </div>

        <div className="col-md-7">
          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            Confirmar nova senha
          </label>

          <input required type="text" placeholder="Confirmar nova senha" />
        </div>

        <div className="col-12">
          <button className="button -md -purple-1 text-white">
            Salvar Senha
          </button>
        </div>
      </form>
    </div>
  );
}
