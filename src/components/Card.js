import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="card">
        <div className="card-border">
          <h3 data-testid="name-card" className="card-title">{ cardName }</h3>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">{ cardDescription }</p>
          <p>
            Atributo 01
            <span data-testid="attr1-card">{ cardAttr1 }</span>
          </p>
          <p>
            Atributo 02
            <span data-testid="attr2-card">{ cardAttr2 }</span>
          </p>
          <p>
            Atributo 03
            <span data-testid="attr3-card">{ cardAttr3 }</span>
          </p>
          <p data-testid="rare-card">{ cardRare }</p>
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
