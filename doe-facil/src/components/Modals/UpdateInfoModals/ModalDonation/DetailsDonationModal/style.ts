import styled from "styled-components"; 

export const StyledDialog = styled.dialog`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0;
  border: none;

  div{
    background-color: #fff;
  }
`