import styled from "styled-components";

export const StyledHomePage = styled.div`

  @media(max-width: 425px){
    nav{
      width: 6.25rem;
    }
  }
  
  .homePageWallpaper1{
    width:100%;
  }

  .mainContainer{
    padding-block: 1.25rem ;

    h1{
      text-align: center;

      font-size: 1.375rem;
      color: var(--Color-primary);
      font-weight: 800;

      margin-bottom: 1.875rem;
    }

    div{
      display: flex;
      align-items: center;
      justify-content: center;

      margin-inline: 1.375rem;

      img{
        display: none;
      }

      p{
        color: var(--Color-primary-50);
        font-weight: 600;
        line-height: 1.375rem;
        font-size: 1.125rem;

        max-width: 400px;
      }

      @media(min-width: 450px){
        gap: 1.875rem;

        img{
          width: 9.125rem;
          height: 11.25rem;
          display: flex;
        }
      }
    }
  }

  footer{
    display: flex;

    padding-block: 1.25rem;
    justify-content: space-between;

    margin-inline: 1.25rem;

    img{
      width: 6.25rem;
    }

    div{

      display: flex;
      flex-direction: column;
      align-items: center;

      p{
        font-size: 0.625rem;
      }

      .phoneNumber{
        font-weight: 800;
      }

      .line{
        background-color: var(--Color-primary);
        width: 9.375rem;
        height: 0.063rem;

        margin-block: 0.75rem;
      }
    }
  }
`