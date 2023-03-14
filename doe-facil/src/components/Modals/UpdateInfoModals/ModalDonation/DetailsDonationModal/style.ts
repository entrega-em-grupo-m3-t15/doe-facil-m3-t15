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
  
  .box_modal {
    background-color: #fff;
    width: 80%;
    min-height: 40%;
    padding: 1rem;
    border-radius: 12px;
  }
  .box_modal > h2 {
    width: 100%;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--Color-primary);
    display: flex;
    justify-content: center;
  }
  .box_description {
    display: flex;
    flex-direction: column;
    margin-top: 1.8rem;
    min-height: 140px;
  }
  .box_description > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 100%;
  }
  .box_description > div > h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .box_description > div > p {
    font-size: 0.8rem;
    color: var(--Color-primary-50);
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 80px;
    justify-content: center;
  }
  div > button {
    border: none;
    background-color: #fff;
    font-weight: 600;
    font-size: 1rem;
  }
  @media (min-width: 684px) {
    .box_modal {
      width: 30%;
      min-height: 30%;
      padding: 1.5rem;
    }
    .box_modal > h2 {
      font-size: 2rem;
    }
    .box_description > div > h2 {
      font-size: 1.8rem;
    }
    .box_description > div > p {
      font-size: 1rem;
      width: 80%;
    }
    div > button {
      font-size: 1.4rem;
    }
  }
`;
