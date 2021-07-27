import React from "react";
import { useRecoilValue } from "recoil";
import {
  TodayDate,
  TodoItem,
  TodoItemCreator,
  TodoListFilters,
  TodoListStats,
} from "../../Components";
import { filteredTodoListState } from "../../Recoil/TodoAtom";
import * as S from "./Style";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState); //List 상태 받아오기
  const showList = todoList.map((todoItem) => (
    <TodoItem key={todoItem.id} item={todoItem} /> //받아온 상태의 변수와 key TodoItem Component에 prop값 넘겨주기
  ));
  return (
    <S.Container>
      <TodayDate />
      <TodoListStats />
      <TodoListFilters />
      <S.ListContainer>{showList}</S.ListContainer>
      <TodoItemCreator />
    </S.Container>
  );
};

export default TodoList;
