import React, { useState } from "react";

function TodoList() {
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState("");
	const [error, setError] = useState(false);

	const [userName, setUserName] = useState("")
	const [isLogin, setIsLogin] = useState(false);

	const baseUrl = 'https://assets.breatheco.de/apis/fake/todos/';



	function createUser() {

		if (!isLogin) {
			setError("Error No Login");
		} else {

			fetch(baseUrl + 'user/' + $userName, {
				method: "POST",
				body: JSON.stringify([]),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(resp => {
					console.log(resp.ok); // will be true if the response is successfull
					console.log(resp.status); // the status code = 200 or code = 400 etc.
					console.log(resp.text()); // will try return the exact result as string
					return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
				})
				.then(data => {
					//here is were your code should start after the fetch finishes
					console.log(data); //this will print on the console the exact object received from the server
				})
				.catch(error => {
					//error handling
					console.log(error);
				});

		}
	}

	function deleteUser(){


		fetch(baseUrl + 'todos/' + $userName, {
			method: "DELETE",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
		//
		setUserName("");
	}

	function getInitialTodoList() {

		fetch(baseUrl + userName, {
			method: "GET",
			body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}

	function setTodoList() {
		fetch(baseUrl + '', {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}

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
					<div className="">
						{
							(!isLogin) ? (
								<form action="" method="" onSumbit="">
									<input className="input" type="text"
									onChange={ event => setUserName(event.target.value) }  value={ userName } />

									<button className="btn btn-primary" type="submit" >Set User</button>


								</form>
							) : (
								<div>
									<h3 className="display-2" >{ userName }</h3>
								
								<div>
									<button className="btn btn-danger" onClick={ deleteUser } type="button" >Delete User</button>
								</div>
								</div>
							)
						}
					
				</div>

				</div>

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
