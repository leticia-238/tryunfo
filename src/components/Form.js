import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <h2>Adicionar nova carta</h2>
        <form>
          <label htmlFor="name-input" className="label-top">
            <span>Nome</span>
            <input
              type="text"
              data-testid="name-input"
              id="name-input"
            />
          </label>
          <label htmlFor="description-input" className="label-top">
            <span>Descrição</span>
            <textarea
              data-testid="description-input"
              id="description-input"
            />
          </label>
          <label htmlFor="attr1-input" className="label-aside">
            <span>Atributo 01</span>
            <input
              type="number"
              data-testid="attr1-input"
              id="attr1-input"
            />
          </label>
          <label htmlFor="attr2-input" className="label-aside">
            <span>Atributo 02</span>
            <input
              type="number"
              data-testid="attr2-input"
              id="attr2-input"
            />
          </label>
          <label htmlFor="attr3-input" className="label-aside">
            <span>Atributo 03</span>
            <input
              type="number"
              data-testid="attr3-input"
              id="attr3-input"
            />
          </label>
          <label htmlFor="image-input" className="label-aside">
            <span>Imagem</span>
            <input type="text" data-testid="image-input" id="image-input" />
          </label>
          <label htmlFor="rare-input" className="label-top">
            <span>Raridade</span>
            <select data-testid="rare-input" id="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input" className="label-aside">
            <input type="checkbox" data-testid="trunfo-input" id="trunfo-input" />
          </label>
          <button type="button" data-testid="save-button" className="btn">
            Salvar
          </button>
        </form>
      </>
    );
  }
}

export default Form;
