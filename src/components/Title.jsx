import React from "react";
class Title extends React.Component {
    render() {
        const {title} = this.props;
        return (
            <div>{title}</div>
        )
    };
}

export default Title;