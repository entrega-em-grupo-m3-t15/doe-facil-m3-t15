import styled from "styled-components";

export const StyleCards = styled.li`
  width: 100%;
  /* padding: 1rem .5rem; */

  border-radius: 16px;

  background-color: #f6efd2;

  .card_title {
    width: 60%;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--Sucess);
    border-top-left-radius: 16px;
  }

  main {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .container_card {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  .card_description > h4 {
    font-weight: 600;
    font-size: 1.2rem;
  }

  .card_description > p {
    font-size: 0.8rem;
    color: var(--Color-primary);
  }

  .box_image > img {
    width: 80px;
  }

  main > button {
    border: 1px solid var(--Color-primary);
    height: 30px;
    width: 100px;
    border-radius: 12px;

    color: var(--Color-primary);
  }

  @media (min-width: 685px) {
    width: 30%;
  }
`;
