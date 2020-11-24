import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...Props }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...Props} />
    {label ? (
      <label className={`${Props.value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
