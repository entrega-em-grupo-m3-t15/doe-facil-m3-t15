import styled from "styled-components";

export const StyledDialog = styled.dialog`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0;
  border: none;

  section{
    background-color: #fff;

    display: flex;
    flex-direction: column;

    padding: 1.25rem;

    border-radius: .5rem;

    .closeBtn{
      display: block;
      margin-left: auto;

      button{
        width: 3.125rem;
      }
    }

    div{
      gap: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: auto;
      height: auto;
    }
    

    main{
      display: flex;
      flex-direction: column;
      margin: 0;

      h2{
        font-size: 1.375rem;
        font-weight: 600;

        text-align: center;

        color: var(--Color-primary);

        margin-block: 0.938rem;
      }
    }
  }  
`