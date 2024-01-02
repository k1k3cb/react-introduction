const CalculateTriangleArea = ({ base, height }) => {
	const result = (base * height) / 2;

	return <h2> El área del triangulo es : {result}m2</h2>;
};

export default CalculateTriangleArea;
