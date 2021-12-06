import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid var(--gray-light);

  > div {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img,
    > svg {
      max-height: 45px;
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;

      @media (max-width: 70rem) {
        gap: 8px;
      }

      button {
        height: 40px;
        margin: 0;

        @media (max-width: 70rem) {
          padding-left: 0;
          padding-right: 0;
          width: 15rem;
        }
      }
    }

    @media (min-width: 130rem) {
      max-width: 160rem;
    }

    @media (min-width: 180rem) {
      max-width: 200rem;
    }
  }
`;
