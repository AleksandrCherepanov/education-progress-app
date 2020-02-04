import  React, { PureComponent } from "react";

class UIHeaderTag extends PureComponent {
    render() {
        const { size, value } = this.props;
        const HeaderTag = `h${size}`;

        return (
            <HeaderTag>{ value }</HeaderTag>
        )
    }
}

export default UIHeaderTag;