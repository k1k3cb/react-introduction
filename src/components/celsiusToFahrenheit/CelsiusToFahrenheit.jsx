const CelsiusToFahrenheit = ({ temperature }) => {
	const result = temperature * 1.8 + 32;
	return (
		<h2>
			{' '}
			{temperature}ºC son {result}ºF
		</h2>
	);
};

export default CelsiusToFahrenheit;
