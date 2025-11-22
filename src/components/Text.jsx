const Text = (props) => { // -> truyền object literal sử dụng {{}}
    console.log(props);
    return (
        <p style={{...props.style}}> {props.children} </p> 
    );
}

export default Text;