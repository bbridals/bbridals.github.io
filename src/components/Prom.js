import styled from "styled-components"
import {Content, Container, BrandLogo} from "./styling";


const Prom = (props) =>{
    document.title="Prom Dresses"
    return <Container>
        <Content>
            <h2>Prom Gown Designers We Carry</h2>
            <p>Click a brand to see their collection</p>
            
            <a href="https://alyceparis.com/collections/prom-dresses" target="_blank" rel="noopener noreferrer">
                <BrandLogo src="/images/prom/alyce-logo.png" />
            </a>
            <a href="http://www.clarisse.us/gallery.php?id=20211" target="_blank" rel="noopener noreferrer">
                <BrandLogo src="/images/prom/clarisse-logo.png" />
            </a>
            <a href="https://colorsdress.com/prom-dress-2/collections/" target="_blank" rel="noopener noreferrer">
                <BrandLogo src="/images/prom/colors-logo.png" />
            </a>
            <a href="https://faviana.com/prom-dresses.html" target="_blank" rel="noopener noreferrer">
                <BrandLogo src="/images/prom/faviana-logo.png" />
            </a>
            <a href="https://www.jovani.com/prom-dresses" target="_blank" rel="noopener noreferrer">
                <BrandLogo src="/images/prom/jovani-logo.jpg" />
            </a>
            <a href="https://www.jvn.com/prom-dresses" target="_blank" rel="noopener noreferrer">
                <BrandLogo src="/images/prom/jvn-logo.png" />
            </a>
            <a href="https://www.luccilu.com/collections/lucci-lu/prom.html" target="_blank" rel="noopener noreferrer">
                <BrandLogo src="/images/prom/lucci-lu-logo2.png" />
            </a>
            <a href="https://primaveracouture.com/product-category/spring-prom-2022/" target="_blank" rel="noopener noreferrer">
                <BrandLogo src="/images/prom/primavera-logo.png" alt="PRIMAVERA"/>
            </a>
            <a href="https://scalausa.com/collections/" target="_blank" rel="noopener noreferrer">
                <BrandLogo src="/images/prom/scala-logo.png" />
            </a>
        </Content>
        </Container>
};

// const BrandLogo = styled.img`
//     margin-top: 25px;
//     max-width: 100%;
//     border-radius: 4px;
//     max-height: 90px;
//     transition: box-shadow .2s ease-in-out, transform .2s ease-in-out;

//     &:hover{
//         box-shadow: 0 0 30px #f075a9;
//         opacity: 1;
//         transform: scale(1.1, 1.1);
//     }
// `;

export default Prom;