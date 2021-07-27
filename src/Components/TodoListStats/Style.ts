import styled from "styled-components";

export const StateContainer = styled.ul`
  padding: 0 32px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e9ecef;
`;

export const StateBox = styled.div`
  display: flex;
  font-size: 18px;
  :first-child {
    margin-bottom: 15px;
  }
  font-weight: bold;
  li {
    width: 50%;
  }
`;
