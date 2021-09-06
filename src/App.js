import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { Route, useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

import { AppTopbar } from "./AppTopbar";
import { AppFooter } from "./AppFooter";
import { AppMenu } from "./AppMenu";
import { AppProfile } from "./AppProfile";

import PrimeReact from "primereact/api";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./layout/flags/flags.css";
import "./layout/layout.scss";
import "./App.scss";
import { Inicio } from "./pages/Inicio";
import { Tramites } from "./pages/Tramites";
import { RenovarNie } from "./pages/RenovarNie";
import { FirmaElectronica } from "./pages/FirmaElectronica";
import { CertificadoDigital } from "./Tramite/CertificadoDigital/CertificadoDigital";

const App = () => {
    const [layoutMode, setLayoutMode] = useState("static");
    const [layoutColorMode, setLayoutColorMode] = useState("dark");
    const [inputStyle, setInputStyle] = useState("outlined");
    const [ripple, setRipple] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);
    const sidebar = useRef();

    const history = useHistory();

    let menuClick = false;

    useEffect(() => {
        setSidebarActive(false);
    }, []);

    useEffect(() => {
        if (sidebarActive) {
            addClass(document.body, "body-overflow-hidden");
        } else {
            removeClass(document.body, "body-overflow-hidden");
        }
    }, [sidebarActive]);

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    };

    const onRipple = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    };

    const onLayoutModeChange = (mode) => {
        setLayoutMode(mode);
    };

    const onColorModeChange = (mode) => {
        setLayoutColorMode(mode);
    };

    const onWrapperClick = (event) => {
        if (!menuClick && layoutMode === "overlay") {
            setSidebarActive(false);
        }
        menuClick = false;
    };

    const onToggleMenu = (event) => {
        menuClick = true;

        setSidebarActive((prevState) => !prevState);

        event.preventDefault();
    };

    const onSidebarClick = () => {
        menuClick = true;
    };

    const onMenuItemClick = (event) => {
        if (!event.item.items && layoutMode === "overlay") {
            setSidebarActive(false);
        }
    };

    const addClass = (element, className) => {
        if (element.classList) element.classList.add(className);
        else element.className += " " + className;
    };

    const removeClass = (element, className) => {
        if (element.classList) element.classList.remove(className);
        else element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };

    const isSidebarVisible = () => {
        return sidebarActive;
    };

    const logo = layoutColorMode === "dark" ? "assets/layout/images/logo-white.svg" : "assets/layout/images/logo.svg";

    const wrapperClass = classNames("layout-wrapper", {
        "layout-overlay": layoutMode === "overlay",
        "layout-static": layoutMode === "static",
        "layout-active": sidebarActive,
        "p-input-filled": inputStyle === "filled",
        "p-ripple-disabled": ripple === false,
    });

    const sidebarClassName = classNames("layout-sidebar", {
        "layout-sidebar-dark": layoutColorMode === "dark",
        "layout-sidebar-light": layoutColorMode === "light",
    });

    return (
        <div className={wrapperClass} onClick={onWrapperClick}>
            <AppTopbar onToggleMenu={onToggleMenu} />

            <CSSTransition classNames="layout-sidebar" timeout={{ enter: 200, exit: 200 }} in={isSidebarVisible()} unmountOnExit>
                <div ref={sidebar} className={sidebarClassName} onClick={onSidebarClick}>
                    <div className="layout-logo" style={{ cursor: "pointer" }} onClick={() => history.push("/")}>
                        <img alt="Logo" src={logo} />
                    </div>
                    <AppProfile />
                </div>
            </CSSTransition>
            <div className="layout-main">
                <Route path="/tramites" exact component={Tramites} />
                <Route path="/RenovarNIE" exact component={RenovarNie} />
                <Route path="/FirmaElectronica" exact component={FirmaElectronica} />
                <Route path="/certificadodigital" exact component={CertificadoDigital} />
                <Route path="/" exact component={Inicio} />
                <ScrollUpButton />
            </div>

            <AppFooter />
        </div>
    );
};

export default App;
