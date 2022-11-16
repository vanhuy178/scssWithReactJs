import React from "react";
import circle from '../assets/circles.svg'

class LandingImage extends React.Component {
    render() {
        return (
            <section className="landing">
                <img src={circle} alt="nhìn cc" />
                <h1>Dots</h1>
            </section>
        )
    }
}
export default LandingImage;