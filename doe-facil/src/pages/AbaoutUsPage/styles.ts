import styled from "styled-components";

export const StyledAboutUs = styled.div`
  header{
    padding-bottom: 20px;
  }


  @media(max-width: 425px){
    nav{
    width: 100px;
  }
  }
  

  h2{
    font-weight:800;
    font-size: 2.25rem;
    color:var(--Color-primary);
    margin-bottom: 1.875rem;
    margin-top: 2.563rem;
    text-align: center;
  }

  main{

    margin-inline: 1.25rem;

    p{
      font-weight: 400;
      font-size: 1rem;
      color: var(--Color-primary);
      line-height: 1.5rem;
    }
  }

  footer{
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2.5rem;
    margin-bottom: 2.5rem;

    h3{
      font-weight: 800;
      font-size: 1.75rem;
      color: var(--Color-primary);
      margin-bottom: 1.25rem;
    }
    section{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;



      div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.938rem;
        margin-top: 1.688rem;

        img{
          width: 4.875rem;
          border-radius: 9.5rem;
        }

        h4{
          color: var(--Color-primary);
          font-weight: 800;
          font-size: 0.875rem;
        }
      }
    }

    @media(min-width: 800px){
      section{
        grid-template-columns: repeat(4, 1fr);
        gap: 1.25rem;
        
        div{
          img{
           width: 6.25rem;
          }
        }
      }  
    }

    @media(min-width: 1300px){
      section{
        grid-template-columns: repeat(4, 1fr);
        gap: 1.25rem;
        
        div{
          img{
           width: 10.813rem;
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
        margin-top: 1.25rem;
      }
    }
  }
`