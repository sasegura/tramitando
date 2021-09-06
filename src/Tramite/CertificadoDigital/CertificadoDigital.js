import React from "react";
import StepWizard from "react-step-wizard";
import { Paso1 } from "./Paso1";
import { Paso2 } from "./Paso2";
import { Paso3 } from "./Paso3";
import { Paso4 } from "./Paso4";

import img2 from "../../assets/images/tramites_alta_02.png";
import Navigator from "./Navigator";

export const CertificadoDigital = () => {
    return (
        <div className="p-grid">
            <div className="p-col-12 p-d-flex">
                <div className="p-col-1"></div>
                <div className="card p-col-10">
                    <div className="p-col-12 p-d-flex">
                        <div className="p-col-3"></div>
                        <div className="p-col-6">
                            <img src={img2} alt="Tramite" width="100%" />
                        </div>
                    </div>
                    <StepWizard nav={<Navigator />}>
                        <Paso1 />
                        <Paso2 />
                        <Paso3 />
                        <Paso4 />
                    </StepWizard>
                </div>
            </div>
        </div>
    );
};
