import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 8;
    margin: 5% 0;

    svg {
      width: 100%;
    }
  }

  main {
    flex: 8;
    margin: 10%;

    h1 {
      font-size: 7.5em;
      margin: 15px;
      font-weight: bold;
      margin: 5% 0 5% 5%;
      color: var(--purple-light);
    }

    h2 {
      font-weight: bold;
      margin: 0 5% 5% 5%;
    }

    p {
      margin: 5% 0;
    }
  }
`;
