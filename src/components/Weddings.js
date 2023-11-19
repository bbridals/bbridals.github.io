import styled from "styled-components"
import {Content, Container, BrandLogo} from "./styling";

const Weddings = (props) =>{
    document.title="Wedding Dresses"
    return <Container>
    <Content>
        <h1>Wedding Gown Designers We Carry</h1>
        <p>Click a brand to see their collection</p>
        
        <a href="https://www.casablancabridal.com/collections/gowns/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/wedding-gown/casablanca-logo.png" />
        </a>
        
        <a href="https://www.demetrios.com/wedding-dresses" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/wedding-gown/demetrios-logo.png" />
        </a>


        <h1><br/>Bridesmaids Gown Designers We Carry</h1>
        <p>Click a brand to see their collection</p>
        
    
        <a href="https://www.jasminebridal.com/bridesmaids/b2/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/b2-logo.png" />
        </a>
        <a href="https://barijay.com/bridesmaid-dresses.html" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/bari-jay-logo.png" />
        </a>
        <a href="https://www.jasminebridal.com/bridesmaids/belsoie/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/belsoie-logo.png" />
        </a>
        <a href="https://dessy.com/bridesmaid-dresses/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/dessy-logo.png" />
        </a>
        <a href="https://www.jasminebridal.com/bridesmaids/JASMINE-BRIDESMAIDS/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/jasmine-logo.png" />
        </a>
        <a href="https://www.morilee.com/browse/bridesmaids/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/morilee-logo.png" />
        </a>
        
        <h1><br/>Mother of the Bride/Groom Gown Designers We Carry</h1>
        <p>Click a brand to see their collection</p>
        
        <a href="https://www.adriannapapell.com/collections/mother-of-the-bride-dresses" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/motherofthebride/adriannapapell-logo.png" />
        </a>
        <a href="https://www.christinawucollection.com/collections/bridesmaid-dresses" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/motherofthebride/christina-wu-logo.png" />
        </a>
        <a href="https://www.jasminebridal.com/mothers/JADE-COUTURE/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/motherofthebride/jade-couture-logo.jpg" />
        </a>
        <a href="https://colorsdress.com/mother-of-the-bride/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/motherofthebride/marsoni-logo.png" />
        </a>
        <a href="https://colorsdress.com/mother-of-the-bride-2/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/motherofthebride/rina-di-montella-logo.png" />
        </a>
        
    </Content>
    </Container>
};


export default Weddings;