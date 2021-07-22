import React, { ChangeEvent, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../../Recoil/TodoAtom";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  const oldTodoList = useRecoilValue(todoListState);
  const nextId = useRef(1); //id 계산을 위해 useRef의 current프로퍼티 선언

  const onAddItem = () => {
    //버튼 클릭시 Recoil에 있는 데이터 업데이트
    setTodoList([
      ...oldTodoList, // 이전에 생성되어있던 리스트 불러오기
      {
        id: getId(), //list 구분을 위한 id값 업데이트
        text: inputValue, // inputValue안에 들어간 string을 text property에 업데이트
        isComplete: false, // 수행을 아직 완료하지 않았으므로 default 값으로 false 업데이트
      },
    ]);
    setInputValue("");
  };

  const getId = () => {
    return (nextId.current += 1); // id(length)값 +1
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // input의 value를 inputValue라는 useState에 업데이트
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={onAddItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
