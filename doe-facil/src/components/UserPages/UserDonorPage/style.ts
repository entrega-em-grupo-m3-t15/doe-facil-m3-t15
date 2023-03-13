import styled from "styled-components";

export const StyleUserPage = styled.div`
  width: 100%;

  .logo > img {
    width: 160px;
  }

  a {
    text-decoration: none;
    color: var(--Color-primary);

    font-weight: 600;
  }

  .button_creat_donation {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    padding: 1rem 0.5rem;
  }

  .box_cards {
    padding: 1rem 0.5rem;
  }

  .box_cards > ul {
    margin-top: 1rem;
    max-height: 400px;
    overflow: auto;
  }

  .box_cards > ul > .list_donation_empty {
    width: 100%;
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.4rem;
    font-weight: 600;

    color: var(--Color-primary-50);

    text-align: center;
    line-height: 1.7rem;
  }

  .box_info {
    background-color: var(--grey-20);
  }

  span > button {
    padding: 0.5rem 1rem;

    border: 1px solid var(--Color-primary);
    border-radius: 30px;

    color: var(--Color-primary);

    background-color: #fff;

    font-size: 0.8rem;
    font-weight: 600;
  }

  main {
    margin-top: 85px;
  }

  @media (min-width: 694px) {
    .container {
      margin: 0 auto;
      width: 1200px;
    }

    .box_profile-main {
      display: flex;
      width: 100%;
      min-height: 630px;
      gap: 1rem;
    }

    .box_info {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      padding: 1rem;
    }

    .button_creat_donation {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: flex-end;

      padding: 1rem 0.5rem;
    }

    .button_creat_donation > button {
      padding: 1.5rem 1rem;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.2rem;

      border: 2px solid var(--Color-primary);
    }

    section {
      width: 100%;
    }

    .box_cards > ul > .list_donation_empty {
      height: 350px;
    }

    .box_cards > ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const StyleHeaderUserPage = styled.header`
  border-bottom: solid 2px var(--Color-primary);

  background-color: #fff;

  padding: 0.5rem 1rem;

  width: 100%;

  position: fixed;
  top: 0;

  .box_header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
