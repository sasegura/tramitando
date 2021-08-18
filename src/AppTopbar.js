import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom";

export const AppTopbar = (props) => {
    const history = useHistory();
    return (
        <div className="layout-topbar clearfix">
            <Button
                className="p-button-text"
                onClick={() => history.goBack()}
                label=""
                icon="pi pi-arrow-left
"
            />
            {/* <button type="button" className="p-link layout-menu-button" onClick={props.onToggleMenu}>
                <span className="pi pi-bars" />
    </button> */}
            <Button className="p-button-text" onClick={() => history.push("/")} label="Logo" />
            <div className="layout-topbar-icons">
                <Button className="p-button-text  " label="Trámites" onClick={() => history.push("/tramites")} />
            </div>
        </div>
    );
};
