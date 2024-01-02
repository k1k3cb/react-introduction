import CalculateCircleArea from './components/calculateCircleArea/CalculateCircleArea';
import CalculateSquareArea from './components/calculateSquareArea/CalculateSquareArea';
import CalculateTriangleArea from './components/calculateTriangleArea/CalculateTriangleArea';
import CelsiusToFahrenheit from './components/celsiusToFahrenheit/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/fahrenheitToCelsius/FahrenheitToCelsius';
import SayHello from './components/sayHello/SayHello';
import TotalPrice from './components/totalPrice/TotalPrice';
import WriteMessage from './components/writeMessage/WriteMessage';

const App = () => {
	return (
		<>
			<SayHello name='Pepito' />
			<CalculateSquareArea side={9} />{' '}
			<CalculateTriangleArea base={10} height={5} />{' '}
			<CalculateCircleArea radio={4} />
			<CelsiusToFahrenheit temperature={35} />
			<FahrenheitToCelsius temperature={95} />
			<TotalPrice amount={10} />{' '}
			<WriteMessage
				name='Josua'
				material='lápices'
				size={10}
				note='Afilados por favor'
			/>
		</>
	);
};

export default App;
