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
					{incompreteTodos.map((todo) => {
						return (
							<div key={todo} className="list-row">
								<li>{todo}</li>
								<button>完了</button>
								<button>削除</button>
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
