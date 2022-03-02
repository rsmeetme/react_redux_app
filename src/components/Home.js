import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Home = () => {
	const amount = useSelector((state) => state.amount);
	const dispatch = useDispatch();
	const actions = bindActionCreators(actionCreators, dispatch);
	const { withdrawMoney, depositMoney } = actions;
	return (
		<>
			<h2 className="my-4">Deposit/withdrawal</h2>
			<div className="container">
				<button
					className="btn btn-primary m-2"
					// onClick={() => {
					// 	dispatch(actionCreators.withdrawMoney(100));
					// }}
					onClick={() => {
						withdrawMoney(100);
					}}
				>
					-
				</button>
				Update Balance is : {amount}
				<button
					className="btn btn-primary m-2"
					// onClick={() => {
					// 	dispatch(actionCreators.depositMoney(100));
					// }}
					onClick={() => {
						depositMoney(100);
					}}
				>
					+
				</button>
			</div>
		</>
	);
};

export default Home;
