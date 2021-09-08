import React, {useState} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useHistory} from "react-router-dom";
import {Menubar} from "primereact/menubar";
import logoImg from "./assets/images/logo.ico"; // TODO cambiar imagen


export const AppTopbar = (props) => {
    const history = useHistory();
    const [inputText, setInputText] = useState("");
    const menuItems = [
        {
            label: "Trámites",
            command: () => history.push("/tramites"),
            style: {"font-size": "1.5em"},
        },
    ];
    const logo = <img alt="logo" src={logoImg}
                      onClick={() => history.push("/")}
                      height="40"
                      className="p-mr-5 p-ml-6"/>;
    const search =
            <span className="p-inputgroup">
                <Button icon="pi pi-search" onClick={() => setInputText("")}/>
                <InputText type="search" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Search"/>
            </span>;

    return (<Menubar model={menuItems} start={logo} end={search} />);
};

