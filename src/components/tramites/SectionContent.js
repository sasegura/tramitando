export const SectionContent = (props) => {
    const {type, content} = props.content;

    return <>{type === "text" ? <p>{content}</p> :
        <ul>{content.map((item, index) => {
            return (<li key={"item_"+index}>{item}</li>);
        })}
        </ul>
    }
    </>;
};
