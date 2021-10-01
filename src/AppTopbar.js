import React, {useState} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useHistory} from "react-router-dom";
import logoImg from "./assets/images/Logo con nombre sin slogan.png";


export const AppTopbar = (props) => {
    const history = useHistory();
    const [inputText, setInputText] = useState("");

    return (
        <div className={"p-d-flex p-flex-wrap p-ai-center"}
             style={{padding: "0.5em 2em"}}>
            <img alt="logo" src={logoImg}
                 onClick={() => history.push("/")}
                 height="60"
                 style={{cursor: "pointer"}}
            />

            <Button className="p-button-text p-ml-auto"
                    label="Tramites"
                    onClick={() => history.push("/tramites")}
            />

            <span className="p-input-icon-right p-ml-3 top-bar-search">
                <i className="pi pi-search"
                   style={{color: "var(--blue-400)"}}
                   onClick={() => setInputText("")}
                />
                <InputText type="search"
                           value={inputText}
                           onChange={(e) => setInputText(e.target.value)}
                           placeholder="Buscar"
                />
            </span>
        </div>

    );
};
