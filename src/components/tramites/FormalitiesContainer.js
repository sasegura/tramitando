import {SectionTitle} from "./SectionTitle";
import {SectionContent} from "./SectionContent";
import {Panel} from "primereact/panel";
import {useLocation, useHistory} from "react-router-dom";
import {Button} from "primereact/button";


export const FormalitiesContainer = (props) => {
    const { pathname: url } = useLocation();
    const history = useHistory();
    const {name, sections} = props.data;

    return <Panel header={name}
                  icons={<Button className="p-button-text"
                                 icon="pi pi-question-circle"
                                 onClick={()=>{history.push(url + "/guia")}}
                                 label={"Guía"}/>
                  }>
        {sections.map(({title, contents}) => {
            return (
                <>
                    <SectionTitle title={title}/>
                    {contents.map((cnt) => {
                        return (<SectionContent content={cnt}/>);
                    })}
                </>
            );
        })}
    </Panel>;
}
