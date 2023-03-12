import styled from "styled-components";

export const StyledModal = styled.div.attrs({
  className: "modalContainer"
})`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);

  .dialogModal{
    display: flex;
    flex-direction: column;
    position: absolute;

    .closeBtn{
      display: block;
    }

    div{
      width: auto;
      height: auto;
    }

    main{
      h2{
        color: var(--Color-primary-50);
        font-weight: 800;
        font-size: 24px;
        margin: 0;
      }
    }
  }

  
`