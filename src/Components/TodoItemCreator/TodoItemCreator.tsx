import React, { ChangeEvent, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../../Recoil/TodoAtom";
import { MdAdd } from "react-icons/md";
import * as S from "./Style";

const TodoItemCreator = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  const oldTodoList = useRecoilValue(todoListState);
  const nextId = useRef(1); //id 계산을 위해 useRef의 current프로퍼티 선언

  const onToggle = () => setOpen(!open);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // input의 value를 inputValue라는 useState에 업데이트
  };

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    //form으로 데이터 값 받기
    e.preventDefault(); // 이벤트 방지
    setTodoList([
      ...oldTodoList, // 이전에 생성되어있던 리스트 불러오기
      {
        id: getId(), //list 구분을 위한 id값 업데이트
        text: inputValue, // inputValue안에 들어간 string을 text property에 업데이트
        isComplete: false, // 수행을 아직 완료하지 않았으므로 default 값으로 false 업데이트
      },
    ]);
    setOpen(false);
    setInputValue("");
  };

  const getId = () => {
    return (nextId.current += 1); // id(length)값 +1
  };

  return (
    <>
      {open && (
        <S.CreatorContainer>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={onChange}
              placeholder="할 일을 입력 후, Enter 를 누르세요"
            />
          </form>
        </S.CreatorContainer>
      )}

      <S.PlusButton onClick={onToggle} open={open}>
        <MdAdd />
      </S.PlusButton>
    </>
  );
};

export default TodoItemCreator;
