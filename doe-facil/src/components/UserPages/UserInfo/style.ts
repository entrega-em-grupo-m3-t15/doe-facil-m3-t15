import styled from "styled-components";

export const StyleProfileUser = styled.div`
  padding: 1rem;
  background-color: var(--grey-20);

  .box_profile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .box_profile > header > button {
    border: none;
    font-size: 1rem;
    color: var(--Color-primary);
    background-color: var(--grey-20);
    cursor: pointer;
  }

  div > header {
    display: flex;
    justify-content: space-between;
  }

  div > header > h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .icon {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;

    margin: 1rem 0;
  }

  .icon > h2 {
    font-weight: 600;
  }

  .box_icon {
    width: 60px;
    height: 60px;

    border: 2px solid var(--gray-100);
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box_info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .box_info > ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    font-size: 0.8rem;
    font-weight: 500;
  }

  .box_info > h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  ul > li > span {
    color: var(--Color-primary);
    font-size: 0.9rem;
    font-weight: 600;
  }

  @media (min-width: 694px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;

    .box_info > h2 {
      font-size: 1.4rem;
    }

    ul > li > span {
      font-size: 1.2rem;
    }

    .box_profile {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 35%;
      justify-content: space-between;
    }

    .box_icon {
      width: 95px;
      height: 95px;
    }

    div > header > h2 {
      font-size: 2rem;
    }

    .box_profile > header > button {
      font-size: 1.3rem;
    }

    .icon > h2 {
      font-size: 1.2rem;
    }

    .box_info > ul {
      display: flex;
      gap: 1rem;
    }

    .box_info > h2 {
      font-size: 1.4rem;
    }

    ul > li {
      font-size: 0.9rem;
    }

    ul > li > span {
      color: var(--Color-primary);
      font-size: 1.2rem;
    }
  }
`;
