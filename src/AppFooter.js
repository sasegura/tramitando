import React from "react";
import logoFooter from "./assets/images/Logo sin nombre ni slogan.png"

export const AppFooter = () => {
    return (
        <div className="p-d-flex p-flex-wrap p-ai-center">
            <img src={logoFooter} alt="Logo" width="60" />
            <span className="footer-text" style={{ marginRight: "5px", color: "#ca371b" }}>
                Tramiteo, donde tu trámite se convierte en simple.
            </span>
        </div>
    );
};
