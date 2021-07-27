import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../Recoil/TodoAtom";

const TodoItem = ({ item }: any) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleItemCompletion = () => {
    const newList = todoList.map((listItem) =>
      listItem.id === item.id
        ? { ...listItem, isComplete: !item.isComplete }
        : listItem
    ); // todo의 id가 같으면 isComplete를 업데이트하고 아닌 것은 newlist를 생성하여 넣어준다.
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = todoList.filter((listItem) => listItem.id !== item.id); // todo의 id가 다르면 filter 통하여 추출하고 남은 값을 반환한다.
    setTodoList(newList);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <input type="text" value={item.text} onChange={editItemText} />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;
