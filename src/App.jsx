import React from "react";
import "./styles.css";

export const App = () => {
	return (
		<>
			<div>
				<input placeholder="TODOを入力" />
				<buutton>追加</buutton>
			</div>
			<div>
				<p>未完了のTODO</p>
				<ul>
					<div>
						<li>てすと１</li>
						<button>完了</button>
						<button>削除</button>
					</div>
					<div>
						<li>てすと１</li>
						<button>完了</button>
						<button>削除</button>
					</div>
				</ul>
			</div>
			<div>
				<p>完了のTODO</p>
				<ul>
					<div>
						<li>てすと１</li>
						<button>戻す</button>
					</div>
					<div>
						<li>てすと１</li>
						<button>戻す</button>
					</div>
				</ul>
			</div>
		</>
	);
};
