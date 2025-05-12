import React from "react";

export default function SocialProfiles({ activeTab }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={`tabs__pane -tab-item-3 ${activeTab == 3 ? "is-active" : ""} `}
    >
      <form onSubmit={handleSubmit} className="contact-form row y-gap-30">
        <div className="col-md-6">
          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            Twitter
          </label>

          <input required type="text" placeholder="Perfil do Twitter" />
        </div>

        <div className="col-md-6">
          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            Facebook
          </label>

          <input required type="text" placeholder="Perfil do Facebook" />
        </div>

        <div className="col-md-6">
          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            Instagram
          </label>

          <input required type="text" placeholder="Perfil do Instagram" />
        </div>

        <div className="col-md-6">
          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            URL do Perfil no LinkedIn
          </label>

          <input required type="text" placeholder="Perfil do LinkedIn" />
        </div>

        <div className="col-12">
          <button className="button -md -purple-1 text-white">
            Salvar Perfil Social
          </button>
        </div>
      </form>
    </div>
  );
}
