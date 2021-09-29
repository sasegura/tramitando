import React, {useEffect, useState} from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Timeline } from 'primereact/timeline';
import classNames from 'classnames';
import {useHistory, useParams} from "react-router-dom";
import img from "../assets/images/Logo sin nombre ni slogan.png"
import {getGuide} from "../service/FormalityService";
import {SectionContent} from "../components/tramites/SectionContent";
import {Page} from "../components/Page";


const formalityUrl = "/tramites";

const GuideHeader = (props) => {
    return <div className={"p-d-flex p-flex-wrap p-ai-center"}
                style={{padding: "0.5em 2em"}}>
        <span className="p-card-title">{props.guideTitle}</span>
        <Button className="p-button-text p-ml-auto"
                label={props.backText}
                onClick={props.backAction}
                icon="pi pi-info-circle"
        />
    </div>;
};

export const FormalityGuide = () => {
    const {id} = useParams();
    const history = useHistory();
    const [guide, setGuide] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(()=>{
        const service = getGuide(id);
        service.then((data)=>{setGuide(data)});
    });

    const stepsNum = () => guide.steps ? guide.steps.length : 0;

    // const customEvents = [
    //     {
    //         steps: 4,
    //         status: 'Ordered',
    //         date: '15/10/2020 10:30',
    //         icon: 'pi pi-shopping-cart',
    //         color: '#9C27B0',
    //         image: 'game-controller.jpg',
    //     },
    //     { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7', image: 'game-controller.jpg' },
    //     { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-envelope', color: '#FF9800', image: 'game-controller.jpg' },
    //     { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B', image: 'game-controller.jpg' }
    // ];
    //
    // const horizontalEvents = [
    //     '2020', '2021', '2022', '2023'
    // ];

    const customizedContent = (item, index) => {
        const displayContent = currentStep === index+1;
        let content;
        let footer;

        if (displayContent) {
            const buttonClass = "p-button-text";
            const prev = {
                label: "anterior", icon: "pi pi-chevron-left", iconPos: "left",
                class: "p-mr-auto " + buttonClass, step: currentStep > 1 ? -1 : 0
            };
            const next = {
                label: "siguiente", icon: "pi pi-chevron-right", iconPos: "right",
                class: "p-ml-auto " + buttonClass, step: currentStep < stepsNum() ? 1 : 0
            };

            const customButton = (config) => {
                return <Button label={config.label}
                               icon={config.icon}
                               className={config.class}
                               iconPos={config.iconPos}
                               onClick={() => {setCurrentStep(currentStep + config.step)}}
                />
            };

            content = (type, content) => {
                let jsx = null;
                if (type === "text"){
                    jsx = <p>{content}</p>;
                }else if (type === "img"){
                    jsx = <img src={content}/>;
                }else {
                    jsx = <></>;
                }
                return jsx;
            };

            footer = <div className="p-d-flex">
                {index === 0 ? customButton(next)
                    : index === stepsNum() - 1 ? customButton(prev)
                        : <>{customButton(prev)}{customButton(next)}</>
                }
            </div>;
        }

        return (
            displayContent ?
                <Card title={item.title} className="p-mb-4" footer={footer}>
                    {item && item.contents.map(cnt => content(cnt.type, cnt.content) )}
                </Card>
                : <div className="p-card-title p-pt-1 timeline-step"
                     onClick={()=>setCurrentStep(index+1)}>
                    {item.title}
                </div>
        );// TODO Implementar transicion usando <CSSTransition>
    };

    const customizedMarker = (item, index) => {
        return (
            <span className="custom-marker p-shadow-2 timeline-step"
                  style={{ backgroundColor: "#607D8B"}}
                  onClick={()=>setCurrentStep(index+1)}>
                <i className={classNames('marker-icon', "p-text-bold")}>{index+1}</i>
            </span>
        );
    };

    const contentHeader = <GuideHeader guideTitle={guide.name}
                                backText={"Info"}
                                backAction={() => history.push(`${formalityUrl}/${id}`)}
    />;

    const headerDivStyle = {paddingTop: "40px", paddingBottom: "80px", width: "100%", backgroundColor: "darkblue"};
    const header = <div style={headerDivStyle}>
        <h3 style={{color: "white", textAlign: "center"}}>{guide.name && guide.name.toUpperCase()}</h3>
    </div>;

    // contentHeader
    return <Page header={header}
                 content={<Timeline value={guide && guide.steps}
                                    className="customized-timeline"
                                    marker={customizedMarker}
                                    content={customizedContent}/>}
                 contentHeader={contentHeader}
                 contentStyle={{marginTop: "-40px"}}
    />
    // return <Card title={header}>
    //     <Timeline value={guide && guide.steps}
    //               // className="customized-timeline"
    //               marker={customizedMarker}
    //               content={customizedContent}
    //     />
    // </Card>
};
