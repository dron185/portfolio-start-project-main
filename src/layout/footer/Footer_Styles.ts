import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
    padding: 40px 0 40px;
    background-color: ${theme.colors.primaryBg};
`;

const Name = styled.span`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;
`;

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);

    color: ${theme.colors.accent};

    &:hover {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`;

const Copyright = styled.small`
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    opacity: 0.5;
`;

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}