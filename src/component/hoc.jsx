function withStyles(ComponentCustom){
    return (props) => {
        const style = {
            color: "red",
            fontSize: "1em",
            ...props.style
        }
        return <ComponentCustom {...props} style = {style}/>
    }
}
export default withStyles;