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
				<div className="col-xs-12 col-md-6  py-3 my-auto">
					<div className="alert alert-danger my-3">
						Error: Empty Task
					</div>
					<input
						className="form-control"
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
												className="item left "
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
								{tasks.length} Tasks{" "}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TodoList;
