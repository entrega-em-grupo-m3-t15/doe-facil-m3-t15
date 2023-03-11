import styled from "styled-components";

export const StyledContainerMobile = styled.div`
  width: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledHeaderMain = styled.header`
  width: 90%;
  display: flex;
  justify-content: space-between;
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
  width: 80%;
`;
