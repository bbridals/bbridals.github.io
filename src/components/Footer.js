import styled from "styled-components";

const Footer = (props) => {    

    return <Container>
        <p> (732) 671-3800 &#183; 749 Highway 35 Middletown, NJ 07748 &#183; <b>By appointment only</b></p>
    </Container>;
};

const Container = styled.nav`
    position:fixed;
    left:0;
    right: 0;
    bottom: 0;
    height: 70px;
    background-color: #f9c8dd;
    display: flex;
    justify-content: center;
    align-items:center;
    z-index: 3;
`;

export default Footer;