import React, { useState } from "react";
import "./styles.css";

export const App = () => {
	const [todoText, setTodoText] = useState("");
	const [incompreteTodos, setIncompleteTodos] = useState([
		"てすと１",
		"テスト2"
	]);

	const [completeTodos, setCompleteTodos] = useState(["ijiji"]);

	const onChangeTodoText = (e) => setTodoText(e.target.value);

	const onClickAdd = () => {
		if (todoText === "") return;
		const newTodos = [...incompreteTodos, todoText];
		setIncompleteTodos(newTodos);
		setTodoText("");
	};

	const onClickDelete = (index) => {
		const newTodos = [...incompreteTodos];
		newTodos.splice(index, 1);
		setIncompleteTodos(newTodos);
	};

	const onClickComplete = (index) => {
		const newIncompleteTodos = [...incompreteTodos];
		newIncompleteTodos.splice(index, 1);

		const newCompleteTodos = [...completeTodos, incompreteTodos[index]];

		setIncompleteTodos(newIncompleteTodos);
		setCompleteTodos(newCompleteTodos);
	};

	return (
		<>
			<div className="input-area">
				<input
					placeholder="TODOを入力"
					value={todoText}
					onChange={onChangeTodoText}
				/>
				<button onClick={onClickAdd}>追加</button>
			</div>
			<div className="incomplete-area">
				<p className="title">未完了のTODO</p>
				<ul>
					{incompreteTodos.map((todo, index) => {
						return (
							<div key={todo} className="list-row">
								<li>{todo}</li>
								<button onClick={() => onClickComplete(index)}>完了</button>
								<button onClick={() => onClickDelete(index)}>削除</button>
							</div>
						);
					})}
				</ul>
			</div>
			<div className="complete-area">
				<p className="title">完了のTODO</p>
				<ul>
					{completeTodos.map((todo) => {
						return (
							<div key={todo} className="list-row">
								<li>{todo}</li>
								<button>戻す</button>
							</div>
						);
					})}
				</ul>
			</div>
		</>
	);
};
