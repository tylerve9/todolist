import React, { useState } from "react";

function TodoList() {
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState("");
	const [error, setError] = useState(false);

	function addTask(params) {
		if (task == "") {
			setError(true);
			return;
		}
		setError(false);
		if (params.key == "Enter") {
			setTasks([...tasks, task]);
			setTask("");
			//imprimir tareas
		}
	}

	function delTask(id) {
		setTasks(
			tasks.filter((t, i) => {
				return i != id;
			})
		);
	}

	return (
		<div className="container">
			<div className="row justify-content-center fondo-lista rounded shadow mw-50 mt-5">
				<div className="col-xs-12 col-md-6  py-3 my-auto perspectiva">
					{error && (
						<div
							className="alert alert-danger my-3"
							onClick={() => setError(false)}>
							Error: Empty Task
						</div>
					)}
					<input
						className="form-control d-inline w-100"
						type="text"
						value={task}
						placeholder="Write your task here!"
						onChange={event => setTask(event.target.value)}
						onKeyUp={addTask}
					/>

					<ul className="bg-white list-group shadow mb-5">
						{tasks.map((t, i) => {
							return (
								<li key={i} className="list-group-item">
									<div className="d-flex justify-content-between">
										<div>{t}</div>
										<div>
											<span
												className="item-trash"
												onClick={() => delTask(i)}>
												<i className="fas fa-trash-alt text-danger"></i>
											</span>
										</div>
									</div>
								</li>
							);
						})}
						<li className="list-group-item text-left bg-dark ">
							<div className="bg-dark text-muted font-weight-bolder font-italic">
								{tasks.length > 0 ? tasks.length : "No "} Tasks{" "}
							</div>
						</li>
					</ul>

					{tasks.length <= 0 && (
						<div className="d-flex justify-content-center ">
							<div className="w-100 bg-info border-info text-center align-middle border rounded-pill shadow">
								<span className="bg-info text-white text-center  align-top font-weight-bold">
									No Tasks, add a Task!
								</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default TodoList;
