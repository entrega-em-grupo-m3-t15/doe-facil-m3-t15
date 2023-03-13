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

  div{
    background-color: #fff;

    padding: 1rem;

    border-radius: 1.75rem;

    header{
      display: flex;
      flex-direction: column;

      button{
        margin-left: auto;
      }

      h2{
        margin: 0 auto;
      }
    }

    form{
      display: flex;
      flex-direction: column;

      div{
        display: flex;
        justify-content: center;
        padding: 0;
      }

      h2{
        text-align: center;
      }

      label{
        display: flex;
        flex-direction: column;
      }
    }
  }
`