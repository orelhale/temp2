import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";


export default function MainRouter() {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Home />} />
			</Route>
		</Routes>
	)
}