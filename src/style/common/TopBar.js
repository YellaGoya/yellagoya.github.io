import styled from "styled-components";
import { Link } from "gatsby";

export const Header = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 63px;

  //내부 wrapper 2개를 좌우 끝에 위치 시키고 수직 중앙 정렬
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #1b1b1b;

  border-bottom: 2px solid #858585;

  user-select: none;
  z-index: 100;
`;

export const TitleWrapper = styled.nav`
  position: relative;
  margin-left: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    color: #d5383f;
    transition: opacity 0.3s ease;
    opacity: ${(props) => (props.$isFolio ? "0.5" : "1")};
  }

  & > :nth-child(2) {
    opacity: ${(props) => (props.$isFolio ? "0.5" : "1")};
  }

  & > :nth-child(4) {
    opacity: ${(props) => (props.$isFolio ? "1" : "0.5")};
  }
`;

export const Title = styled(Link)`
  display: inline;
  margin: 8px;

  color: #d5383f;

  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: none;

  cursor: pointer;

  opacity: 0.5;
  transition: opacity 0.3s ease;
`;

export const NavWrapper = styled.nav`
  position: relative;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavBtn = styled.button`
  margin-right: 20px;

  background-color: transparent;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  & > svg {
    color: ${(props) => (props.$isToggle ? "#fff" : "#d5383f")};
    transition: color 0.3s ease;
  }
`;

export const Menu = styled.nav`
  position: fixed;
  top: ${(props) => (props.$isMenu ? "65px" : "-137px")};

  height: 200px;
  width: 100%;

  border-bottom: 2px solid #858585;

  transition: top 0.5s ease;

  background-color: #1b1b1b;
  z-index: 50;
`;

export const Search = styled.nav`
  position: fixed;
  top: ${(props) => (props.$isSearch ? "65px" : "-2px")};

  height: 65px;
  width: 100%;

  background-color: #1b1b1b;

  border-bottom: 2px solid #858585;

  transition: top 0.5s ease;

  z-index: 51;

  & > input {
    position: relative;
    top: 7px;
    left: 20px;
    height: 50px;
    width: calc(100% - 40px);

    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;

    background-color: transparent;

    outline: none;
    border: none;

    font-family:
      "PrVr",
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      sans-serif;
    text-rendering: optimizeLegibility;
  }
`;
