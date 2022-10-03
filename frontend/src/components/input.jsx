export const InputBox = (props) => {
  const { type, placeholder, handleChange, handleBlur, label, value, name } =
    props;
  return (
    <div className="mt-2">
      <label
        for="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onBlur={handleBlur}
        className=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black  "
        placeholder={placeholder}
        onChange={handleChange}
        required
      />
    </div>
  );
};
