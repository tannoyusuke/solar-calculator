import React from 'react';

export const Input = ({ value, onChange, className = '', type = 'text' }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    className={`input ${className}`}
  />
);