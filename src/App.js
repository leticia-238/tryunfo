import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardBox from './components/CardBox';
import SearchFilters from './components/SearchFilters';

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
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.state = {
      ...this.defaultValues,
      cardList: [],
      hasTrunfo: false,
      cardTrunfo: false,
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
      isDisabled: false,
      filterCardlist: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.validFormInputs = this.validFormInputs.bind(this);
    this.filter = this.filter.bind(this);
  }

  handleInput(target) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  validFormInputs() {
    this.setState((prevState) => {
      const validInput = this.validInputValues(prevState)
        && this.validAttrValues(prevState);
      return { isSaveButtonDisabled: !validInput };
    });
  }

  saveCard() {
    this.setState((prevState) => {
      const newList = [...prevState.cardList, prevState];
      return { cardList: newList, filterCardlist: newList };
    });
    this.setState(({ cardTrunfo }) => (
      cardTrunfo
        ? { hasTrunfo: true, ...this.defaultValues }
        : { ...this.defaultValues }
    ));
  }

  validInputValues({ cardName, cardDescription, cardImage }) {
    const validInput = (input) => input.trim().length > 0;
    const { cardList } = this.state;
    return validInput(cardName) && validInput(cardDescription)
    && validInput(cardImage)
    && !cardList.find((dataCard) => dataCard.cardName === cardName);
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

  deleteCard(key, cardTrunfo) {
    this.setState(({ cardList }) => {
      const newList = cardList.filter(({ cardName }) => cardName !== key);
      return { cardList: newList, filterCardlist: newList, hasTrunfo: !cardTrunfo };
    });
  }

  filter(filter) {
    this.setState(({ cardList, nameFilter, rareFilter, trunfoFilter }) => {
      const selectedFilter = filter === 'trunfoFilter'
        ? ({ cardTrunfo }) => (cardTrunfo)
        : ({ cardName, cardRare }) => cardName.startsWith(nameFilter)
    && (cardRare === rareFilter || rareFilter === 'todas');

      return {
        filterCardlist: cardList.filter(selectedFilter),
        isDisabled: trunfoFilter,
      };
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      cardList, nameFilter, rareFilter, trunfoFilter, isDisabled,
      filterCardlist } = this.state;

    return (
      <main>
        <section className="section-form">
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
            onInputChange={ ({ target }) => {
              this.handleInput(target);
              this.validFormInputs();
            } }
            onSaveButtonClick={ this.saveCard }
          />
        </section>
        <section className="section-card-preview">
          <h2 className="title">Pré-visualização</h2>
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
        </section>
        <section className="section-cards">
          <SearchFilters
            nameFilter={ nameFilter }
            rareFilter={ rareFilter }
            onInputChange={ ({ target }) => {
              this.handleInput(target);
              this.filter(target.name);
            } }
            trunfoFilter={ trunfoFilter }
            isDisabled={ isDisabled }
          />
          { cardList.length > 0
            ? filterCardlist.map((dataCard) => (
              <CardBox
                key={ dataCard.cardName }
                dataCard={ dataCard }
                deleteCard={ this.deleteCard }
              />
            ))
            : 'oo'}
        </section>
      </main>
    );
  }
}

export default App;
