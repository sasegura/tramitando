import {SectionTitle} from "./SectionTitle";
import {SectionContent} from "./SectionContent";
import {Panel} from "primereact/panel";


export const FormalitiesContainer = (props) => {
    const {name, sections} = props.data;
    return <Panel header={name}>
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
