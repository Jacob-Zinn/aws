import styled, { css, keyframes } from "styled-components";

export const StyledGift = styled.div`
  /* display: flex;
    flex-direction: column;
    height: 100%;

    img {
        cursor: pointer;
    } */

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease 10;
  /* animation: happiness 4s ease infinite; */
  height: 100vh;
  background-color: red;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes happiness {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(25%);
    }
    100% {
      transform: translateX(0%);
    }
  }


  img {


    animation: shake 2500ms ease-in-out 1500ms 7;




  .regular {
    background-color: "red";
  }

    .shake-anim {

      @keyframes shake {
        0% {
          transform: rotate(0deg);
        }
        5% {
          transform: rotate(8deg);
        }
        10% {
          transform: rotate(-7deg);
        }
        15% {
          transform: rotate(4deg);
        }
        20% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    }
  }
`;
