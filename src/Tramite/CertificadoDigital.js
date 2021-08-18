import React from "react";
import StepWizard from "react-step-wizard";
import { Paso1 } from "./CertificadoDigital/Paso1";
import { Paso2 } from "./CertificadoDigital/Paso2";
import { Paso3 } from "./CertificadoDigital/Paso3";
import { Paso4 } from "./CertificadoDigital/Paso4";

export const CertificadoDigital = () => {
    return (
        <div className="p-grid">
            <div className="p-col-12 p-d-flex">
                <div className="p-col-1"></div>
                <div className="card p-col-10">
                    <StepWizard>
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
