const FahrenheitToCelsius = ({ temperature }) => {
	const result = (temperature - 32) / 1.8;
	return (
		<h2>
			{' '}
			{temperature}ºF son {result}ºC
		</h2>
	);
};

export default FahrenheitToCelsius;
