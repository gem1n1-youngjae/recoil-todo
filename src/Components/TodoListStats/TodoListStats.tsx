import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../Recoil/TodoAtom";
import * as S from "./Style";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <S.StateContainer>
      <S.StateBox>
        <li>할 일 : {totalNum}</li>
        <li>진행율 : {formattedPercentCompleted}%</li>
      </S.StateBox>
      <S.StateBox>
        <li>완료한 일 : {totalCompletedNum}</li>
        <li>완료 안한 일 : {totalUncompletedNum}</li>
      </S.StateBox>
    </S.StateContainer>
  );
};

export default TodoListStats;
