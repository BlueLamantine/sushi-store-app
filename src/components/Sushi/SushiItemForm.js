import Input from '../UI/Input';
const SushiForm = props => {
  return (
    <form className="flex p-5">
      <Input
        label={'Amount'}
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button className="text-white bg-red-400 border border-transparent shadow-sm rounded hover:bg-red-600 m-5 p-2">
        Add
      </button>
    </form>
  );
};

export default SushiForm;
