import { Button } from "primereact/button";

export default Navigator = (props) => {
    return (
        <div className="p-d-flex p-justify-center">
            <p>
                <Button onClick={props.firstStep} icon="pi pi-angle-double-left" />
            </p>
            <p>
                <Button onClick={props.previousStep} icon="pi pi-angle-left" />
            </p>
            <p>
                <Button onClick={props.nextStep} icon="pi pi-angle-right" />
            </p>

            <p>
                <Button onClick={props.lastStep} icon="pi pi-angle-double-right" />
            </p>
        </div>
    );
};
