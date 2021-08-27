import React from 'react';

const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <div>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} className="p-2 flex" />
    </div>
  );
});

export default Input;
