import React from 'react';
import '../styles/Form.css';
import PropTypes from 'prop-types';

class TrunfoCheckbox extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label
        htmlFor="trunfo-input"
        className="label label-aside checkbox"
      >
        <input
          type="checkbox"
          data-testid="trunfo-input"
          id="trunfo-input"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <span>Super Trybe Trunfo</span>
      </label>
    );
  }
}

TrunfoCheckbox.propTypes = {
  cardTrunfo: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default TrunfoCheckbox;
