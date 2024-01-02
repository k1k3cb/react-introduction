const TotalPrice = ({ amount }) => {
	const result = amount * 1.21;
	return <h2>El importe total son {result}€, IVA incluido.</h2>;
};

export default TotalPrice;
