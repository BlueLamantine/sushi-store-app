const Input = ({ label, input }) => {
  return (
    <div>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} className="p-2 flex"/>
    </div>
  );
};

export default Input;
