import logo from "./logo.svg";
import "./App.css";
import greetings from "@mbzcloud-test/mbzcloud-web-comp";
import sum from "@mbzcloud-test/mbzcloud-web-comp";
import multiply from "@mbzcloud-test/mbzcloud-web-comp";
import subtract from "@mbzcloud-test/mbzcloud-web-comp";

// use the latest github package
//greetings();
console.log(greetings);

console.log(sum(2, 2));
console.log(multiply(2, 2));
console.log(subtract(2, 2));

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Hello World! from React and mbzcloud-web-comp Github latest package.
				</p>
			</header>
		</div>
	);
}

export default App;
