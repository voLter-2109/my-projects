import styled from "styled-components";

const HeaderStyle = styled.header`
  height: 50vh;
  background-image: url("./img/header/home.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
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
`;

const AboutUs = styled.div`
  display: block;
  width: 55vw;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;

  div {
    margin-top: 20px;
    position: relative;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      right: 32%;
      width: 100px;
      border: 1px solid black;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 32%;
      width: 100px;
      border: 1px solid black;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
  }
  p {
    margin-top: 20px;
    font-size: 1.3em;
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

export { HeaderStyle , AboutUs, Li};
