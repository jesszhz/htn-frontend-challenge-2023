Input.defaultProps = {
  showPassword: false
};

export default function Input(props) {
  const { label, placeholder, type, onChange, error, name } = props;

  return (
    <fieldset>
      <label className="text-md">{label}</label>
      <div className="h-1"></div>
      <input
        className={`rounded-lg text-lg ${
          error ? 'border-red-400' : 'border-slate-500'
        } border hover:border-white focus:border-white bg-slate-600 py-2 px-3 text-md w-full focus:outline-none ease-in-out duration-200`}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}></input>
      {error && <div className="text-base text-red-400 mt-1">{error}</div>}
    </fieldset>
  );
}
