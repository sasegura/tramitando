import React, {useState} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useHistory} from "react-router-dom";
import logoImg from "./assets/images/logo.ico"; // TODO cambiar imagen


export const AppTopbar = (props) => {
    const history = useHistory();
    const [inputText, setInputText] = useState("");

    const logo = <img alt="logo" src={logoImg}
                      onClick={() => history.push("/")}
                      height="40"
                      className="p-mr-5 p-ml-6"/>;

    const search = <span className="p-input-icon-right top-bar-search">
        <i className="pi pi-search" style={{color: "var(--blue-400)"}} onClick={() => setInputText("")}/>
        <InputText type="search"
                   value={inputText}
                   onChange={(e) => setInputText(e.target.value)}
                   placeholder="Buscar"/>
    </span>;

    const menu = <>
        <Button className="p-button-text"
                label="Tramites"
                onClick={() => history.push("/tramites")}
        />
    </>;
    return (
        <div className="layout-topbar p-card p-grid p-align-center ">
            <div className="p-col-2">{logo}</div>
            <div className="p-d-inline-flex p-col-8 p-flex-row-reverse"> {menu} </div>
            <div className="p-col-2 p-flex-row-reverse">{search}</div>
        </div>


    );
};
