import React from "react";

const TodoList = props => { 
	const todoListElements = props.list.map(element => <li key={element.id} id={element.id} onClick={() => props.remove(element.id)}> {element.text} </li>);
	return ( <ul>{todoListElements}</ul> ) }

export default TodoList;