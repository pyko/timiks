import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Selector = ({ label, onChange, options, value, numeric, fullWidth }) => (
  <SelectContainer fullWidth={fullWidth}>
    <label>{label}:</label>
    <Select value={value} onChange={event => {
      const value = event.target.value;
      onChange(numeric ? Number(value) : value);
    }}>
      {options.map(({ label, value }, index) =>
        <option key={index} value={value}>
          {label}
        </option>
      )}
    </Select>
  </SelectContainer>
);

const SelectContainer = styled.span`
  display: ${props => props.fullWidth ? 'flex' : 'inline-block'};
  justify-content: space-between;
`;

const Select = styled.select`
  font-size: 1.4rem;
  height: 1.8em;
  border-radius: 0.4rem;
  margin-left: ${props => props.theme.sizes.xs};
  border: 1px solid ${props => props.theme.colors.grey};

  &:hover {
    cursor: pointer;
  }
`;

Selector.propTypes = {
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  })).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  numeric: PropTypes.bool
};

export default Selector;
