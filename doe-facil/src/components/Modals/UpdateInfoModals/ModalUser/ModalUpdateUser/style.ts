import styled from "styled-components";

export const StyledDialog = styled.dialog`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0;
  border: none;

  div{
    background-color: #fff;
    padding: 1.25rem;

    border-radius: 1rem;

    header{
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;

      margin-bottom: 1rem;
    }

    main{
      display: flex;
      flex-direction: column;
      margin: 0;

      form{
        display: flex;
        flex-direction: column;

        label{
          margin-bottom: .5rem;
        }

        input{
          margin-bottom: 0.625rem;
        }
      }

      button{
        margin-top: 1.25rem;
      }
    }
  }
`