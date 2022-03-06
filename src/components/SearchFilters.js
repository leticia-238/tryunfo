import React from 'react';
import ProtoTypes from 'prop-types';

class SearchFilters extends React.Component {
  render() {
    const { nameFilter, rareFilter, onInputChange, trunfoFilter,
      isDisabled } = this.props;
    return (
      <div>
        <h2 className="title">Todas as cartas</h2>
        <label htmlFor="name-filter">
          <span>Nome da Carta</span>
          <input
            type="text"
            data-testid="name-filter"
            id="name-filter"
            name="nameFilter"
            value={ nameFilter }
            onChange={ onInputChange }
            disabled={ isDisabled }
          />
        </label>
        <label htmlFor="rare-filter">
          <span>Raridade</span>
          <select
            data-testid="rare-filter"
            id="rare-filter"
            name="rareFilter"
            value={ rareFilter }
            onChange={ onInputChange }
            disabled={ isDisabled }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-filter">
          <input
            type="checkbox"
            id="trunfo-filter"
            data-testid="trunfo-filter"
            name="trunfoFilter"
            checked={ trunfoFilter }
            onChange={ onInputChange }
          />
          <span>Super Trunfo</span>
        </label>
      </div>
    );
  }
}

SearchFilters.propTypes = {
  nameFilter: ProtoTypes.string.isRequired,
  rareFilter: ProtoTypes.string.isRequired,
  onInputChange: ProtoTypes.func.isRequired,
  trunfoFilter: ProtoTypes.bool.isRequired,
  isDisabled: ProtoTypes.bool.isRequired,
};

export default SearchFilters;
