import React from "react";
import {useParams} from "react-router-dom"

export const FirmaElectronica = () => {
    const {title: sectionTitle} = useParams();
    return (
        <div className="p-grid">
            <div className="p-col-12 p-d-flex">
                <div className="p-col-1"></div>
                <div className="card p-col-10">
                    <h1>{sectionTitle}</h1>
                    <h5>Requisitos para tramitar el certificado de firma electrónica o digital</h5>
                    <p>En la actualidad, el avance de la tecnología nos permite gestionar todo tipo de trámites de forma online desde casa. Esto ha traído muchas ventajas y beneficios, especialmente para quienes no desean pasar mucho tiempo en largas colas.</p>
                    <p>
                        Sin embargo, muchos de estos trámites exigen una autentificación de identidad y confiabilidad que podemos tener con una firma electrónica. A continuación, te explicamos todo lo que necesitas saber sobre la firma electrónica. No te pierdas esta guía. Ahórrate tiempo y dolores
                        de cabeza.
                    </p>
                    <h4>¿Qué es la firma electrónica o digital?</h4>
                    <p>Estas firmas son utilizadas para mantener segura la comunicación electrónica mediante la certificación de identidades de manera electrónica o digital. Permiten hacer gestiones por internet con facilidad, comodidad y la máxima seguridad.</p>
                    <p>
                        El Reglamento (UE) Nº 910/2014 del Parlamento Europeo y del Consejo establece que la firma electrónica son un conjunto de datos en formato electrónico que se anexan a una información para certificar un procedimiento. Esta se utiliza para fundamentos legales, ya que tiene
                        validez jurídica.
                    </p>
                    <p>
                        Por otro lado, la firma digital se refiere a los caracteres que se colocan en un documento para identificar al firmante y darle así validez al documento. Está basada en el sistema PKI (Criptografía de Clave Pública) y tiene certificado oficial por parte de una Institución que
                        le da validez.
                    </p>
                    <h4>¿Qué puedo hacer con la firma electrónica?</h4>
                    <p>
                        Con la firma electrónica, puedes firmar todo tipo de documentos incluso las empresas la emplean en sus procesos legales y comerciales. También permite realizar trámites públicos y firmar contratos, formularios y autorizaciones de forma online. Algunos de los usos más
                        frecuentes son:
                    </p>
                    <li>Firmar correos electrónicos, contratos o facturas.</li>
                    <li>Solicitar certificados de antecedentes penales, de empadronamiento o de nacimiento.</li>
                    <li>Comprobar propiedades en el catastro.</li>
                    <li>Consultar títulos universitarios, puntos de carnet, posición en bolsas de empleos públicas, vida laboral en la Seguridad Social, el tiempo restante para la jubilación, multas de circulación, asignación de colegios electorales y más.</li>
                    <li>Pedir ayudas y subvenciones.</li>
                    <li>Declaración de impuestos.</li>
                    <h4>¿Puedo hacer lo mismo con mi DNI electrónico?</h4>
                    <p>También puedes usar el DNIe para realizar la autenticación de identidad, firmar de forma electrónica, certificar integridad de documentos y como pasaporte de viaje. Por lo tanto, el DNIe sí permite hacer lo mismo que la firma electrónica.</p>
                    <h4>¿Es lo mismo que certificado digital?</h4>
                    <p>El DNI electrónico es un medio por el que se puede usar un certificado digital, pues este se almacena en el chip del DNIe y certifica tu identidad. Hay que decir que el DNIe es exclusivo para ciudadanos españoles y de la Comunidad europea.</p>
                </div>
            </div>
        </div>
    );
};
