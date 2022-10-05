export const Button = (props) => {
	const { btnLabel, handleClick, type } = props;
	return (
		<>
			<button
				className=" mt-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-full py-2 px-4 border border-blue-500 hover:border-transparent rounded"
				onClick={handleClick}
				type={type}
			>
				{btnLabel}
			</button>
		</>
	);
};
