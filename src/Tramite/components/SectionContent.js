export const SectionContent = (props) => {
    const {type, content} = props.content;

    return <>{type === "text" ? <p>{content}</p> :
        <ul>{content.map((item) => {
            return (<li>{item}</li>);
        })}
        </ul>
    }
    </>;
};
