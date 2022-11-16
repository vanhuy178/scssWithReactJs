import React from "react";

class HamburgerIcon extends React.Component {

    state = {
        showHambur: this.props.passingShow
    }

    handleSetShow = () => {
        this.setState(
            {
                showHambur: !this.state.showHambur
            }
        )
        this.props.passingHandleSetShow(this.state.showHambur)
        console.log(this.props.passingShow);
    }

    render() {

        return (
            <div className="hamburger"
                onClick={this.handleSetShow}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        )
    }
}
export default HamburgerIcon;