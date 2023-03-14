import styled from "styled-components";

export const Input = styled.input`
  padding: 0.6rem;

  border-radius: 6px;
  border: var(--grey-0);

  ::placeholder {
    font-size: 0.8rem;
  }

  @media (min-width: 659px) {
    padding: 1rem;

    ::placeholder {
      font-size: 1rem;
    }

    :focus {
      border: none;
    }
  }
`;
