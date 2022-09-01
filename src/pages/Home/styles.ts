import styled, { css } from "styled-components";

interface CategoriesNavigationButtonProps {
  active?: boolean;
}

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    color: #000000;
    overflow-y: scroll;
    background-color: ${theme.colors.baseBg3};
  `}

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    box-sizing: border-box;
  }
`;

export const HomeContentContainer = styled.div`
  width: calc(100% - 518px);
  padding-left: 6.5rem;
`;

export const HomeContentHeader = styled.header`
  width: 100%;
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const TitleContainer = styled.div`
  h1 {
    font-family: "Big Shoulders Inline Display", cursive;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  p {
    text-transform: capitalize;
    font-size: 20px;
  }
`;

export const SearchInputContainer = styled.div`
  ${({ theme }) => css`
    width: 173px;
    height: 48px;
    border: 1px solid #393c49;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 10px;
    background: ${theme.colors.baseForm};

    input {
      background: ${theme.colors.baseForm};
      width: 120px;
      height: 38px;
      color: #ffffff;
      font-size: 14px;

      :focus {
        outline: none;
      }
    }
  `}
`;

export const CategoriesNavigationBar = styled.div`
  width: 100%;
  height: 3vh;
  border-bottom: 1px solid #393c49;
  display: flex;
`;

export const CategoriesNavigationButton = styled.button<CategoriesNavigationButtonProps>`
  ${({ theme }) => css`
    border: 0;
    cursor: pointer;
    min-width: 80px;
    min-height: 38px;
    border-radius: 8px;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    margin-right: 0.4rem;
    background-color: ${theme.colors.baseBg1};
    color: ${theme.colors.textColor};
  `}

  :hover {
    color: #6cea69;
  }

  ${({ active }) =>
    active &&
    css`
      color: #6cea69;
      border-bottom: 2px solid #6cea69;
    `}
`;

export const ProductsHeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const TableSelect = styled.select`
  ${({ theme }) => css`
    width: 165px;
    height: 38px;
    background-color: ${theme.colors.baseBg1};
    border: 1px solid ${theme.colors.baseLine};
    border-radius: 8px;
    color: ${theme.colors.textColor};
    cursor: pointer;
    padding: 0 1rem;
    box-sizing: border-box;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg fill='red' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 50%;

    :focus {
      outline: none;
    }

    option {
      :hover {
        background-color: ${theme.colors.baseBg4} !important;
      }
    }
  `}
`;
