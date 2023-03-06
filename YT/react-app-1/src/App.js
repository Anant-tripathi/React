import './App.css';

function App() {
	let name = 'react app';
	let className = "App-header";
	console.log('app');
	return (
		<div className="App">
			<div className={className}>
				{name}
				<Demo></Demo>
			</div>
		</div>
	);
}

function Demo() {
	console.log('app');
	return (
		<div className="App">
			<div className='App-header'>
				Demo
			</div>
		</div>
	);
}

export default App;
