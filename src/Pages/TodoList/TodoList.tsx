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
  const todoList = useRecoilValue(filteredTodoListState);
  const showList = todoList.map((todoItem) => (
    <TodoItem key={todoItem.id} item={todoItem} />
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
