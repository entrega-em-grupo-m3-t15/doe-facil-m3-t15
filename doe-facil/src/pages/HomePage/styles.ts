import styled from "styled-components";

export const StyledHomePage = styled.div`

  @media(max-width: 425px){
    nav{
      width: 100px;
    }
  }
  
  .homePageWallpaper1{
    width:100%;
  }

  main{
    padding-block: 20px ;

    h1{
      text-align: center;

      font-size: 22px;
      color: var(--Color-primary);
      font-weight: 800;

      margin-bottom: 30px;
    }

    div{
      display: flex;
      align-items: center;
      justify-content: center;

      margin-inline: 22px;

      img{
        display: none;
      }

      p{
        color: var(--Color-primary-50);
        font-weight: 600;
        line-height: 22px;
        font-size: 18px;

        max-width: 400px;
      }

      @media(min-width: 450px){

        gap: 30px;
        img{
          width: 146px;
          height: 180px;
          display: flex;
        }
      }
    }
  }

  footer{
    display: flex;

    padding-block: 20px;
    justify-content: space-between;

    margin-inline: 20px;

    img{
      width: 100px;
    }

    div{

      display: flex;
      flex-direction: column;
      align-items: center;

      p{
        font-size: 10px;
      }

      .phoneNumber{
        font-weight: 800;
      }

      .line{
        background-color: var(--Color-primary);
        width: 150px;
        height: 1px;

        margin-block:  12px;
      }
    }
  }
`