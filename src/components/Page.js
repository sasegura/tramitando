import {Card} from "primereact/card";
import React from "react";

export const Page = (props) => {
    const responsiveWidthClasses = "p-lg-10 p-md-11 p-col-12";
    //
    // const headerImgStyle = {height: "60vh"};
    return (
        <>
            {props.header}
            <Card className={responsiveWidthClasses}
                  header={props.contentHeader}
                  style={props.contentStyle}>
                {props.content}
            </Card>
        </>
    );
};
