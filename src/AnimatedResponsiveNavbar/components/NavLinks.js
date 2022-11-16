import React from "react";

class NavLinks extends React.Component {
    render() {
        const receivedShow = this.props.passingShow;
        console.log("nav link >>>: ", receivedShow);
        return (
            <ul className={receivedShow ? "nav-links open" : "nav-links"}>
                <li className={receivedShow ? 'fade' : ''}><a href="#">About</a></li>
                <li className={receivedShow ? 'fade' : ''}><a href="#">Contact</a></li>
                <li className={receivedShow ? 'fade' : ''}><a href="#">Project</a></li>
            </ul>
        )
    }
}
export default NavLinks;