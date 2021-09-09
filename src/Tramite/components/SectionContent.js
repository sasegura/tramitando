export const SectionContent = (props) => {
    const {type, content} = props.contentData;

    return <>{type === "text" ? <p>{content}</p> :
        <ul>{content.map((item) => {
            return (<li>{item}</li>);
        })}
        </ul>
    }
    </>;
};
