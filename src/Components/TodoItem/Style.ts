import styled, { css } from "styled-components";

export const Delete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

export const ItmeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Delete} {
      display: initial;
    }
  }
`;

export const CheckCircle = styled.div<{ checked: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  ${(props) =>
    props.checked &&
    css`
      border: 1px solid #01184a;
      color: #01184a;
    `}
`;

export const TextBox = styled.div<{ checked: boolean }>`
  flex: 1;
  font-size: 18px;
  color: #00306b;
  ${(props) =>
    props.checked &&
    css`
      color: #ced4da;
    `}
`;
