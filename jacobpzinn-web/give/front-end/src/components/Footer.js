import githubLogo from "../assets/GitHub_Logo.png";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://github.com/Jacob-Zinn/aws/tree/master/jacobpzinn-web/give/vue/give">
        <img src={githubLogo} />
      </a>
    </StyledFooter>
  );
};

export default Footer;
