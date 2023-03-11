import styled from "styled-components";

export const StyledAboutUs = styled.div`

  h2{
    font-weight:800;
    font-size: 36px;
    color:var(--Color-primary);
    margin-bottom: 30px;
    margin-top: 41px;
    text-align: center;
  }

  main{

    margin-inline: 20px;

    p{
      font-weight: 400;
      font-size: 16px;
      color: var(--Color-primary);
      line-height: 24px;
    }
  }

  footer{
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 40px;
    margin-bottom: 40px;

    h3{
      font-weight: 800;
      font-size: 28px;
      color: var(--Color-primary);
      margin-bottom: 20px;
    }
    section{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;



      div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin-top: 27px;

        img{
          width: 78px;
          border-radius: 152px;
        }

        h4{
          color: var(--Color-primary);
          font-weight: 800;
          font-size: 14px;
        }
      }
    }

    @media(min-width: 800px){
      section{
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        
        div{
          img{
           width: 100px;
          }
        }
      }  
    }

    @media(min-width: 1300px){
      section{
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        
        div{
          img{
           width: 173px;
          }
        }
      }  
    }  
  }

  .wallpaper{
    display: none;
  }

  @media(min-width: 1100px){
    .infoSection{
      display: flex;

      .wallpaper{
        display: flex;
        width: 40%;
        height: 100vh;
        margin-top: 20px;
      }
    }
  }
`