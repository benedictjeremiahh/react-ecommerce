import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Homepage}></Route>
			</Switch>
			{/* <Homepage /> */}
		</div>
	);
}

export default App;
