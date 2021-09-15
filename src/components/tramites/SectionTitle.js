import {Divider} from "primereact/divider";


export const SectionTitle = (props) => {
    return (
        <Divider >
            <span className="p-text-bold" style={{fontSize: "1.3em"}} >
                <i className="pi pi-check-square p-mr-2" />
                {props.title}
            </span>
        </Divider>
    );
}
