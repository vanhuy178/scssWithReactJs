import React from "react";
import logoShoes from '../assets/shoes.png'
class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img className='card__img' src={logoShoes} />
        <h3 className="card__heading">Shoes</h3>
        <p className="card__desc">
          hello asinomoto, hello tokyo
        </p>
        <h6 className="card__price">$20</h6>
        <ul className="card__list">
          <li><i className="fa fa-star checked"></i></li>
          <li><i className="fa fa-star checked"></i></li>
          <li><i className="fa fa-star checked"></i></li>
          <li><i className="fa fa-star checked"></i></li>
          <li><i className="fa fa-star"></i></li>
        </ul>
        <button className="card__button">Buy Now</button>
      </div>
    )
  }
}
export default Card;