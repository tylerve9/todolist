import React from "react";

import TodoList from "./todolist";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center mt-2 ">
			<h1 className="bg-white display-3 align-center shadow py-3 mb-3">
				{"Todo's List "}
			</h1>
			<TodoList />
		</div>
	);
}
