import styled from "styled-components";

export const CardContainer = styled.div`
  background: var(--bg-input);
  border-radius: 0 8px;
  box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 20%);
  padding: 2.4rem;
  color: var(--txt-primary);

  h3 {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: var(--txt-primary);
    transition: all 0.2s;

    :hover {
      color: var(--purple-light);
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: var(--txt-details);
    padding: 12px;
    border-radius: 0 20px;
    color: var(--white-light);
    /* background: var(--danger); */
  }
`;
