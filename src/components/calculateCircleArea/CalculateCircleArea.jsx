const CalculateCircleArea = ({ radio }) => {
	const result = radio * radio * Math.PI;
	return <h2> El área del círculo es : {result}m2</h2>;
};

export default CalculateCircleArea;
