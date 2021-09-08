import React, {useState} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useHistory} from "react-router-dom";
import {Menubar} from "primereact/menubar";

export const AppTopbar = (props) => {
    const history = useHistory();
    const [inputText, setInputText] = useState("");
    const menuItems = [
        {
            label: "Trámites",
            command: () => history.push("/tramites"),
            className: "layout-menu-button",
        },
        {
            label: "Estudios",
            command: () => history.push("/certificadodigital"),
            className: "layout-menu-button",
        }
    ];
    const logo = <img alt="logo" src="../public/favicon.ico"
                      onClick={() => history.push("/")}
                      height="40"
                      className="p-mr-5 p-ml-6"/>;
    const search =
        <>
            {/*<div className="layout-topbar-icons">*/}
            {/*    <span className=" layout-topbar-search">*/}
            {/*        <Button icon="pi pi-search" className="layout-topbar-search-icon" onClick={() => setInputText("")}/>*/}
            {/*        <InputText type="search" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Search"/>*/}
            {/*    </span>*/}
            {/*</div>*/}
            <span className="p-inputgroup">
                <Button icon="pi pi-search" onClick={() => setInputText("")}/>
                <InputText type="search" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Search"/>
            </span>
        </>;
    return (
        <Menubar model={menuItems} start={logo} end={search} className={/*"layout-topbar"*/""}/>
    );
};

{/*<div className=" p-menubar clearfix">*/
}
{/*    */
}
{/*            /!*            <Button*!/*/
}
{/*            /!*                className="p-button-text"*!/*/
}
{/*            /!*                onClick={() => history.goBack()}*!/*/
}
{/*            /!*                label=""*!/*/
}
{/*            /!*                icon="pi pi-arrow-left*!/*/
}
{/*            /!*"*!/*/
}
{/*            /!*            />*!/*/
}
{/*            /!* <button type="button" className="p-link layout-menu-button" onClick={props.onToggleMenu}>*/
}
{/*                <span className="pi pi-bars" />*/
}
{/*    </button> *!/*/
}
{/*            /!*<span className="p-button-text layout-menu-button" onClick={() => history.push("/")} label="Logo">*!/*/
}
{/*    */
}
{/*            /!*</span>*!/*/
}
{/*    */
}
{/*    */
}
{/*            <Link to="/" className="layout-menu-button">*/
}
{/*                <img alt="logo" src="../public/favicon.ico" width="80" />*/
}
{/*            </Link>*/
}
{/*    */
}
{/*    */
}
{/*            <Button className="p-button-text layout-menu-button" onClick={() => history.push("/tramites")}/>*/
}
{/*    */
}
{/*            <Button className="p-button-text layout-menu-button" label="Trámites" onClick={() => history.push("/tramites")}/>*/
}
{/*            <Button className="p-button-text layout-menu-button" label="Estudio" onClick={() => history.push("/tramites")}/>*/
}
{/*    */
}
{/*    */
}
{/*            <div className="layout-topbar-icons">*/
}
{/*                <span className="p-inputgroup  layout-topbar-search-icon ">*/
}
{/*                    <Button icon="pi pi-search" className="layout-topbar-search-icon" onClick={() => setInputText("")}/>*/
}
{/*                    <InputText type="search" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Global Search"/>*/
}
{/*                </span>*/
}
{/*            </div>*/
}
{/*        </div>*/
}
