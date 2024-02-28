// import Hello from "./assets/Hello";
// import Contact from "./assets/Contact";
// import Counter from "./assets/Counter";

// function App() {
//   const helloData = [
//     { name: 'Anirach', message: 'Hi there'},
//     { name: 'Tom', message: 'Hello..'}
//   ];

//   return (
//     <div className="App">
//       <Counter />
//       {helloData.map((data, index) => {
//         <Hello key={index} name={data.name} message={data.message} />;
//       })}

//       <Contact email="Yoohoe@gmail.com" phone="02357254"/>
//     </div>
//   );
// }

// export default App;

import Hello from './assets/Hello'
import Contact from './assets/Contact'
import Counter from './assets/Counter'

function App() {
	const helloData = [
		{ name: 'Yokswah', message: 'Hi there' },
		{ name: 'Rumdaimai', message: 'Hello world...' }
	]

	return (
		<div className='App'>
			<Counter />
			{ helloData.map((data, index) => (
				<Hello key={index} name={data.name} message={data.message} />
			))}

			<Contact email="Suckaningadik@gmail.com" phone="02357" />
		</div>
	)
}

export default App