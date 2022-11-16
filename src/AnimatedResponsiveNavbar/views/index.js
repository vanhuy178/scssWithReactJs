import React from 'react'
import HamburgerIcon from '../components/HamburgerIcon'
import LandingImage from '../components/LandingImage'
import NavLinks from '../components/NavLinks'
import '../styles/navLinks.scss'
import '../styles/LandingImage.scss'
import '../styles/hamburgerIcon.scss'
import './responsive.scss'


class RenderAnimatedResponsiveNavbar extends React.Component {
    state = {
        show: false
    }
    hanldeSetShow = (show_para) => {
        this.setState({
            show: !show_para
        })
    }
    render() {
        const { show } = this.state
        console.log('render>>> : ', show);
        return (
            <>
                <nav>
                    <NavLinks passingShow={show} />
                    <HamburgerIcon passingShow={show} passingHandleSetShow={this.hanldeSetShow} />
                </nav>
                <LandingImage />
            </>
        )
    }
}
export default RenderAnimatedResponsiveNavbar;

