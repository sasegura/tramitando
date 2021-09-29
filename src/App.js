import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { Route, useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

import { AppTopbar } from "./AppTopbar";
import { AppFooter } from "./AppFooter";
import { AppMenu } from "./AppMenu";
import { AppProfile } from "./AppProfile";
import ReactGA from "react-ga";

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
import { FormalityList } from "./pages/FormalityList";
import { RenovarNie } from "./pages/RenovarNie";
import { FirmaElectronica } from "./pages/FirmaElectronica";
import { CertificadoDigital } from "./Tramite/CertificadoDigital/CertificadoDigital";
import { FormalityDetails } from "./pages/FormalityDetails";
import {FormalityGuide} from "./pages/FormalityGuide";

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
        ReactGA.initialize("UA-207650208-1");
        history.listen((location) => ReactGA.pageview(location.pathname));
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

    const responsiveWidthClasses = "p-lg-10 p-md-11 p-col-12";
    const mainContainersWidth = {width: "100%"};
    // const clsCard = "p-card";

    return (
        <div className="p-d-flex p-flex-column p-flex-wrap" style={{minHeight: "100vh", backgroundColor: "white"}} >
            <nav className="p-d-flex p-flex-column p-flex-wrap p-ai-center"
                 style={{position: "fixed", paddingTop: "0px", zIndex: "10", backgroundColor: "#fff", ...mainContainersWidth}}>
                <div className={responsiveWidthClasses}>
                    <AppTopbar/>
                </div>
            </nav>
            <main className="p-d-flex p-flex-column p-flex-wrap p-ai-center" style={{marginTop: "88px", marginBottom: "1em"}}>
                {/*<div className={responsiveWidthClasses}>*/}
                    <Route path="/tramites" exact component={FormalityList} />
                    <Route path="/tramites/:id" exact component={FormalityDetails} />
                    <Route path="/tramites/:id/guia" exact component={FormalityGuide} />

                    {/*<Route path="/renovarnie" exact component={RenovarNie}/>*/}
                    {/*<Route path="/firmaelectronica" exact component={FirmaElectronica}/>*/}
                    {/*<Route path="/certificadodigital" exact component={CertificadoDigital}/>*/}
                    <Route path="/" exact component={Inicio} />
                    <ScrollUpButton />
                {/*</div>*/}
            </main>
            <footer className={"p-mt-auto p-d-flex p-flex-column p-flex-wrap p-ai-center"}
                    style={{backgroundColor: "#212121", marginTop: "5px"}} >
                <div className={responsiveWidthClasses} >
                    <AppFooter />
                </div>
            </footer>
        </div>
    );
};

{
    /*<div className={wrapperClass} onClick={onWrapperClick}>*/
} //TODO Remove this commented code
{
    /*    <div className="layout-topbar p-d-">*/
}
{
    /*        <div className="p-grid">*/
}
{
    /*        <AppTopbar onToggleMenu={onToggleMenu} className="p-offset-2" />*/
}
{
    /*        </div>*/
}
{
    /*    </div>*/
}

{
    /*    <CSSTransition classNames="layout-sidebar" timeout={{ enter: 200, exit: 200 }} in={isSidebarVisible()} unmountOnExit>*/
}
{
    /*        <div ref={sidebar} className={sidebarClassName} onClick={onSidebarClick}>*/
}
{
    /*            <div className="layout-logo" style={{ cursor: "pointer" }} onClick={() => history.push("/")}>*/
}
{
    /*                <img alt="Logo" src={logo} />*/
}
{
    /*            </div>*/
}
{
    /*            <AppProfile />*/
}
{
    /*        </div>*/
}
{
    /*    </CSSTransition>*/
}
{
    /*    <div className="layout-main">*/
}
{
    /*        <Route path="/tramites" exact component={Tramites} />*/
}
{
    /*        <Route path="/RenovarNIE" exact component={RenovarNie} />*/
}
{
    /*        <Route path="/FirmaElectronica" exact component={FirmaElectronica} />*/
}
{
    /*        <Route path="/certificadodigital" exact component={CertificadoDigital} />*/
}
{
    /*        <Route path="/" exact component={Inicio} />*/
}
{
    /*        <ScrollUpButton />*/
}
{
    /*    </div>*/
}

{
    /*    <AppFooter />*/
}
{
    /*</div>*/
}

export default App;
