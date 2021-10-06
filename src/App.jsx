import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./styles.css";

export const App = () => {
	const [todoText, setTodoText] = useState("");
	const [incompreteTodos, setIncompleteTodos] = useState([]);

	const [completeTodos, setCompleteTodos] = useState([]);

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

	const onClickBack = (index) => {
		const newCompleteTodos = [...completeTodos];
		newCompleteTodos.splice(index, 1);

		const newIncompleteTodos = [...incompreteTodos, completeTodos[index]];
		setCompleteTodos(newCompleteTodos);
		setIncompleteTodos(newIncompleteTodos);
	};

	return (
		<>
			<InputTodo
				todoText={todoText}
				onChange={onChangeTodoText}
				onClick={onClickAdd}
				disabled={incompreteTodos.length >= 5}
			/>

			{incompreteTodos.length >= 5 && (
				<p style={{ color: "red" }}>
					登録できるTODOは5個までだよ〜〜！消化しよ〜
				</p>
			)}

			<IncompleteTodos
				todos={incompreteTodos}
				onClickComplete={onClickComplete}
				onClickDelete={onClickDelete}
			/>

			<CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
		</>
	);
};
