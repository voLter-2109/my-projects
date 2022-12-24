import styled from "styled-components";

const HeaderStyle = styled.header`
  height: 70vh;
  background-image: url("./img/header/home.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

   h1 {
    font-size: 4em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #ffffff;
  }

  h1 ~ div {
    position: relative;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      right: 120%;
      width: 100px;
      border: 1px solid #ffffff;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 120%;
      width: 100px;
      border: 1px solid #ffffff;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
  }

  h2 {
    font-size: 2em;
    color: #ffffff;
    line-height: 1.2em;
  }
  
  button {
    color: white;
    background-color: transparent;
    border: 1px solid #ffffff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 3px;
    padding: 10px 42px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  gap: 20px;
  z-index: 2;

  position: absolute;
  top: 4%;
  left: 2%;
  ul {
    display: flex;
    flex-direction: row;
    gap: 20px;

    a {
      color: white;
      font-size: 2em;

      &.active {
        color: red;
        text-decoration: underline;
        text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.2);
      }
    }
  }
`;

const Li = styled.li`
  font-family: "Merienda";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 17px;
  color: #ffffff;
`;

export { Nav, Li };
export { HeaderStyle };
