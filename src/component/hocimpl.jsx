import withStyles from "./hoc";

const DefText = ({style = {}})=> {
    return <p style={{...style}}> Hello World</p>
}

const StyledText = withStyles(DefText);
export  default StyledText;