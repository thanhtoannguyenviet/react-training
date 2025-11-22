function withStyles(Component) { 
    return (props) => {
        const styles = {
            color: 'blue',
            fontSize: '1em',
            // Merge props
            ...props.style,
        }
        return <Component {...props} style={styles} />;
    }
}
export default withStyles;