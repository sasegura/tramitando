export default Navigator = (props) => {
    return (
        <div className="p-d-flex">
            <p>
                <button onClick={props.previousStep}>Previous Step</button>
            </p>
            <p>
                <button onClick={props.nextStep}>Next Step</button>
            </p>
            <p>
                <button onClick={props.firstStep}>First Step</button>
            </p>
            <p>
                <button onClick={props.lastStep}>Last Step</button>
            </p>
        </div>
    );
};
