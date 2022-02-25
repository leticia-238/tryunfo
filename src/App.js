import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.defaultValues = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: false,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.state = {
      ...this.defaultValues,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
    this.setState((prevState) => {
      const validInput = this.validInputValues(prevState)
        && this.validAttrValues(prevState);
      return { isSaveButtonDisabled: !validInput };
    });
  }

  handleClick() {
    this.setState(({ cardTrunfo }) => (
      cardTrunfo
        ? { ...this.defaultValues, hasTrunfo: cardTrunfo, cardTrunfo }
        : { ...this.defaultValues }
    ));
  }

  validInputValues({ cardName, cardDescription, cardImage }) {
    const validInput = (input) => input.trim().length > 0;
    return validInput(cardName) && validInput(cardDescription)
    && validInput(cardImage);
  }

  validAttrValues({ cardAttr1, cardAttr2, cardAttr3 }) {
    const maxSumValue = 210;
    const maxAttrValue = 90;
    const sum = parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10);

    const validAttr = (Attr) => parseInt(Attr, 10) >= 0
    && parseInt(Attr, 10) <= maxAttrValue;

    return validAttr(cardAttr1) && validAttr(cardAttr2)
    && validAttr(cardAttr3) && sum <= maxSumValue;
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleInput }
          onSaveButtonClick={ this.handleClick }
        />
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
      </div>
    );
  }
}

export default App;
