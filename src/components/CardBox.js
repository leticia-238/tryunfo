import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardBox extends React.Component {
  render() {
    const { dataCard: { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo }, deleteCard } = this.props;

    return (
      <div>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <button
          type="button"
          data-testid="delete-button"
          onClick={ () => { deleteCard(cardName, cardTrunfo); } }
        >
          Excluir
        </button>
      </div>

    );
  }
}

CardBox.propTypes = {
  deleteCard: PropTypes.func.isRequired,
  dataCard: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ])).isRequired,
};

export default CardBox;
