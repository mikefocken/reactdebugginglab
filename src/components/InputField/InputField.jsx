import React from 'react';
import './InputField.css';

// This is a basic component for simplifying the use of input elements in forms
// You will not refactor this component, but you'll want to debug its use.

const InputField = ({ label = '', value, onChange, type = 'text' }) => {
	return (
		<div className="input-field">
			<label>{label}</label>
			<input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
		</div>
	);
};

export default InputField;
