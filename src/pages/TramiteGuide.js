import React, {useState} from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Timeline } from 'primereact/timeline';
import classNames from 'classnames';
import {useHistory} from "react-router-dom";
import img from "../assets/images/Logo sin nombre ni slogan.png"


const GuideHeader = (props) => {
    return <div className={"p-d-flex p-flex-wrap p-ai-center"}
                style={{padding: "0.5em 2em"}}>
        <h5>{props.guideTitle}</h5>
        <Button className="p-button-text p-ml-auto"
                label={props.backText}
                onClick={props.backAction}
                icon="pi pi-info-circle"
        />
    </div>;
}


export const TramiteGuide = () => {
    const history = useHistory();
    const customEvents = [
        {
            steps: 4,
            status: 'Ordered',
            date: '15/10/2020 10:30',
            icon: 'pi pi-shopping-cart',
            color: '#9C27B0',
            image: 'game-controller.jpg',
        },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7', image: 'game-controller.jpg' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-envelope', color: '#FF9800', image: 'game-controller.jpg' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B', image: 'game-controller.jpg' }
    ];
    const [stepNum, setStepNum] = useState(1);

    const horizontalEvents = [
        '2020', '2021', '2022', '2023'
    ];


    const customizedContent = (item, index) => {
        const displayContent = stepNum === index+1;
        let content;
        let footer;
        if (displayContent) {
            const buttonClass = "p-button-text";
            const prev = {label: "anterior", icon: "pi pi-chevron-left", iconPos: "left", class: "p-mr-auto " + buttonClass};
            const next = {label: "siguiente", icon: "pi pi-chevron-right", iconPos: "right", class: "p-ml-auto " + buttonClass};

            const CustomButton = (props) => {
                const step = (props.config.label === prev.label && stepNum > 1) ? -1 :
                    (props.config.label === next.label && stepNum < customEvents.length) ? 1 : 0;
                return <Button label={props.config.label}
                               icon={props.config.icon}
                               className={props.config.class}
                               iconPos={props.config.iconPos}
                               onClick={() => {
                                   setStepNum(stepNum + step)
                               }}/>
            };

            content = <>
                {item.image && <img src={img} alt={item.status} width={150} className="p-shadow-2"/>}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>

            </>;

            footer = <div className="p-d-flex">
                {index === 0 ? <CustomButton  config={next} />:
                    index === customEvents.length - 1 ? <CustomButton config={prev} /> :
                        <>
                            <CustomButton config={prev} />
                            <CustomButton config={next} />
                        </>
                }
            </div>;
        }

        return (
            displayContent ? <Card title={item.status} className="p-mb-4" footer={footer}>{content}</Card> :
                <div className="p-card-title p-pt-1 timeline-step"
                     onClick={()=>setStepNum(index+1)}> {item.status} </div>
        );// TODO Implementar transicion usando <CSSTransition>
    };

    const customizedMarker = (item, index) => {
        return (
            <span className="custom-marker p-shadow-2 timeline-step"
                  style={{ backgroundColor: item.color}}
                  onClick={()=>setStepNum(index+1)}>
                <i className={classNames('marker-icon', "p-text-bold")}>{index+1}</i>
            </span>
        );
    };


    const header = <GuideHeader guideTitle={"Firma electronica"} backText={"Info"} backAction={() => history.push("/tramites/_1")} />;

    return <Card title={header}>
        <Timeline value={customEvents}
                  // className="customized-timeline"
                  marker={customizedMarker}
                  content={customizedContent}
        />
    </Card>


}
