import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Timeline } from 'primereact/timeline';
import classNames from 'classnames';
import {useHistory} from "react-router-dom";
import img from "../assets/images/Logo sin nombre ni slogan.png"
import {Carousel} from "primereact/carousel";
import {Divider} from "primereact/divider";
import {Splitter, SplitterPanel} from "primereact/splitter";


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

    const horizontalEvents = [
        '2020', '2021', '2022', '2023'
    ];


    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={img} alt={item.status} width={200} className="p-shadow-2" />}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };

    const customizedMarker = (item, index) => {
        return (
            <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
                <i className={classNames('marker-icon', "p-text-bold")}>{index+1}</i>
            </span>
        );
    };

    // const template = (item) => {
    //     return (
    //         <Card
    //     );
    // };

    return <Card title="Tramite" subTitle={<Button className={"p-button-text p-button-secondary"} label={"tramite info"} onClick={() => history.goBack()}/>}>
        <Timeline value={customEvents}
                  align="alternate"
                  className="customized-timeline"
                  marker={customizedMarker}
                  content={customizedContent}
        />
        <Divider>
            <span className="p-text-bold" style={{fontSize: "1.3em"}} >Variante 2</span>
        </Divider>
        <Carousel value={customEvents}
                  itemTemplate={customizedContent}
                  numScroll={1}
                  numVisible={1}
        />
    </Card>


}
