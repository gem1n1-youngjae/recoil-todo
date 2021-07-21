import React from "react";
import { useRecoilValue } from "recoil";
import { TodoItem, TodoItemCreator } from "../../Components";
import { todoListState } from "../../Recoil/TodoAtom";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  const showList = todoList.map((todoItem) => (
    <TodoItem key={todoItem.id} item={todoItem} />
  ));
  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />
      {showList}
    </>
  );
};

export default TodoList;
