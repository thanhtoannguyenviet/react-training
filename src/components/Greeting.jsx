const Greeting = (props) => {
    const {name} = props;
    return (
        <div>
            <p>My name is {name}</p>
        </div>
    );
}

export default Greeting;