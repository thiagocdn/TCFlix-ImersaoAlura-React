import React from 'react';

function FormField({ label, type, value, name, onChange }){
  return (
    <div>
      <label>
        {label}:{" "}
        {type === 'textarea' ? 
        
        <textarea
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      :
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      }
      </label>
    </div>
  )
}

export default FormField;