import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../Recoil/TodoAtom";
import * as S from "./Style";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <S.FilterContainer>
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </S.FilterContainer>
  );
};

export default TodoListFilters;
