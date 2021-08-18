import React from "react";

export const Paso2 = (props) => {
    return (
        <div className="p-grid">
            <h4>¿Qué es la firma electrónica o digital?</h4>
            <p>Estas firmas son utilizadas para mantener segura la comunicación electrónica mediante la certificación de identidades de manera electrónica o digital. Permiten hacer gestiones por internet con facilidad, comodidad y la máxima seguridad.</p>
            <p>
                El Reglamento (UE) Nº 910/2014 del Parlamento Europeo y del Consejo establece que la firma electrónica son un conjunto de datos en formato electrónico que se anexan a una información para certificar un procedimiento. Esta se utiliza para fundamentos legales, ya que tiene validez
                jurídica.
            </p>
            <p>
                Por otro lado, la firma digital se refiere a los caracteres que se colocan en un documento para identificar al firmante y darle así validez al documento. Está basada en el sistema PKI (Criptografía de Clave Pública) y tiene certificado oficial por parte de una Institución que le da
                validez.
            </p>
        </div>
    );
};
