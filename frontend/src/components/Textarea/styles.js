import styled from "styled-components";

export const TextAreaMU = styled.div`
  position: relative;

  label {
    font-size: 1.4rem;
  }

  &:focus-within {
    &::after {
      width: calc(100% - 3.2rem);
      height: 2px;
      content: "";
      background: var(--color-primary-light);
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 7px;
    }
  }

  & + .textarea-block {
    margin-top: 1.4rem;
    @media (min-width: 700px) {
      margin-top: 0;
    }
  }

  textarea {
    width: 100%;
    min-height: 8rem;
    height: 16rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 1.2rem 1.6rem;
    resize: vertical;
    font: 1.6rem Archivo;
  }
`;
