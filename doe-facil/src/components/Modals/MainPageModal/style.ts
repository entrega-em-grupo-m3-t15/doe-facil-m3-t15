import styled from "styled-components";

export const StyledCollectModal = styled.dialog`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: #f1eef7;

  .container_collectModal {
    width: 90%;
  }

  header {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    width: 60%;
    align-items: center;

    h2 {
      margin-right: 1rem;
    }
  }

  main {
    display: flex;
    width: 100%;

    .buttons_collectModal {
      display: flex;
      justify-content: space-around;
      width: 60%;
      margin-top: 2rem;
    }

    .button_no {
      background-color: #e60000;
      padding: 1rem;
      border-radius: 1rem;
    }

    .button_yes {
      background-color: #168821;
      padding: 1rem;
      border-radius: 1rem;
    }
  }
`;
