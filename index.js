// This is a class component
// class Hello extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 			</div>
// 		);
// 	}
// }

ReactDOM.render(<Hello />, document.getElementById('root'));

// This is a funtion component
function Hello () {
	return (
		<div>
		<h1>Hello there!</h1>
		<h1>Hello there!</h1>
		<h1>Hello there!</h1>
	</div>
	)
}

ReactDOM.render(<Hello />, document.getElementById('root'));