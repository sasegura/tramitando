import React, { useEffect, useRef } from "react";

export const CodeHighlight = (props) => {
    const codeElement = useRef(null);

    return (
        <pre style={props.style}>
            <code ref={codeElement} className={`language-${props.lang}`}>
                {props.children}&nbsp;
            </code>
        </pre>
    );
};

CodeHighlight.defaultProps = {
    lang: "jsx",
    style: null,
};
