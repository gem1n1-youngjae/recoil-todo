import React from "react";
import * as S from "./Style";

const TodayDate = () => {
  const today = new Date();
  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });
  return (
    <S.HeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
    </S.HeadBlock>
  );
};

export default TodayDate;
