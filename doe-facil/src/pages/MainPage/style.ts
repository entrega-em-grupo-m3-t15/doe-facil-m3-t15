import styled from "styled-components";

export const StyledContainerMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  section {
   
    height: 120px;
    padding: 1rem;

    margin-top: 98px;
    margin-bottom: 1rem;
  }

  section > .box_profile {
    background-color: var(--Color-primary);

    border-radius: 12px;

    padding: 3rem 0;

    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .user_information {
    font-size: 1rem;
    font-weight: 600;

    color: #fff;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  main {
    padding: 1rem 0.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  main > h2 {
    font-size: 1.3rem;
    font-weight: 600;

    color: var(--Color-primary);
  }

  @media (min-width: 685px) {
    padding: 0rem 8rem;

    section {
      margin-top: 110px;
      margin-bottom: 1.5rem;
    }

    main > h2 {
      font-size: 1.6rem;
    }
  }
`;

export const StyledHeaderMain = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: solid 2px var(--Color-primary);

  background-color: #fff;

  position: fixed;
  top: 0;
  right: 0;

  .box_header {
    padding: 1rem 0.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box_logo > img {
    width: 150px;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: var(--Color-primary);
  }

  button {
    border: none;
    background-color: #fff;
    font-size: 1rem;
    font-weight: 600;
    color: var(--Color-primary);
  }

  @media (min-width: 685px) {
    padding: 0rem 8rem;

    .box_logo > img {
      width: 180px;
    }

    a {
      font-size: 1.4rem;
    }

    button {
      font-size: 1.4rem;
    }
  }
`;

export const StyledSectionMain = styled.section`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;

  .user_information {
    margin-left: 1rem;
  }
`;

export const StyledCardListMain = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  max-height: 430px;

  overflow: auto;
  align-items: center;

  @media (min-width: 685px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
