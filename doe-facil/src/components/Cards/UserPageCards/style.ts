import styled from "styled-components";

export const StyleCardsDonor = styled.li`
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

  .box_card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 130px;
    padding: 1rem .8rem;
  }

  .container_card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .card_description{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card_description > h2 {
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

  .box_btn{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
  }

  button{
    border: 1px solid var(--Color-primary);
    padding: .3rem 1rem;
    border-radius: 12px;

    font-weight: 600;
    color: var(--Color-primary);
  }

  @media (min-width: 685px) {
    width: 80%;

  }
`;
