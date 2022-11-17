import React from "react";
import './index.scss'
import '../styles/card.scss'

import Card from "../components/Card";
class RenderResponsiveProductCard extends React.Component {
    render() {
        return (
            <div className="gallery">
                <Card />
            </div>
        )
    }
}
export default RenderResponsiveProductCard;
