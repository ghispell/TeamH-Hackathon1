import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import Root from "./layout/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Page404 from "./pages/Page404.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			// {
			// 	path: "your path",
			// 	element: <Your components />,
			// },
		],
	},
	{
		path: "*",
		element: <Page404 />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
