const SimpleForm = ({ defaultInput, buttonTittle, onComplete }) => {
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input defaultValue={defaultInput} onChange={() => onChange()} />
      <button onClick={onComplete}>{buttonTittle}</button>
    </div>
  );
};
export default SimpleForm;
