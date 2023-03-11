import styled from "styled-components";

export const StyledCard = styled.li`
  background-color: #f6efd2;
  height: 200px;
  width: 300px;
  padding: 1rem;

  .card_title {
    display: flex;
    text-align: center;
    width: 100%;
  }

  .left {
    img {
      width: 50px;
      height: 60px;
      border-radius: 50%;
    }

    .right {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      flex-direction: column;
    }
  }
`;
