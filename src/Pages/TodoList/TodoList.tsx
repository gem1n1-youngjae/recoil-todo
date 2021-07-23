import React from "react";
import { useRecoilValue } from "recoil";
import {
  TodoItem,
  TodoItemCreator,
  TodoListFilters,
  TodoListStats,
} from "../../Components";
import { filteredTodoListState } from "../../Recoil/TodoAtom";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState); //List 상태 받아오기
  const showList = todoList.map((todoItem) => (
    <TodoItem key={todoItem.id} item={todoItem} /> //받아온 상태의 변수와 key TodoItem Component에 prop값 넘겨주기
  ));
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {showList}
    </>
  );
};

export default TodoList;
