import styled from "styled-components"

const Weddings = (props) =>{
    document.title="Wedding Dresses"
    return <Container>
    <Content>
        <h2>Wedding Gown Designers We Carry</h2>
        <p>Click a brand to see their collection</p>
        
        <a href="https://www.casablancabridal.com/collections/gowns/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/wedding-gown/casablanca-logo.png" />
        </a>
        
        <a href="https://www.demetrios.com/wedding-dresses" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/wedding-gown/demetrios-logo.png" />
        </a>


        <h2><br/>Bridesmaids Gown Designers We Carry</h2>
        <p>Click a brand to see their collection</p>
        
        <a href="https://www.alexiadesigns.com/Bridesmaids/Alexia-Designs/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/alexia-logo.png" />
        </a>
        <a href="https://www.jasminebridal.com/bridesmaids/b2/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/b2-logo.png" />
        </a>
        <a href="https://barijay.com/bridesmaid-dresses.html" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/bari-jay-logo.png" />
        </a>
        <a href="https://www.jasminebridal.com/bridesmaids/belsoie/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/belsoie-logo.png" />
        </a>
        <a href="https://www.billlevkoff.com/shop-dresses/all-bridesmaid-dresses/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/bill-levkoff-logo.png" />
        </a>
        <a href="https://dessy.com/bridesmaid-dresses/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/dessy-logo.png" />
        </a>
        <a href="https://gatherandgown.com/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/gather-gown-logo.png" />
        </a>
        <a href="https://www.jasminebridal.com/bridesmaids/JASMINE-BRIDESMAIDS/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/jasmine-logo.png" />
        </a>
        <a href="https://www.morilee.com/browse/bridesmaids/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/morilee-logo.png" />
        </a>
        <a href="https://venusbridal.co.uk/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src="/images/bridesmaids/venus-logo.png" />
        </a>
        
    </Content>
    </Container>
};

const Container = styled.div`
margin-top: 160px;
display: flexbox;
flex-flow: column wrap;
overflow: block;
justify-content: center;
margin-bottom: 125px;
`;

const Content = styled.div`
width: 50%;
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
align-content: space-around;
text-align: center;
`;

const BrandLogo = styled.img`
margin-top: 25px;
max-width: 100%;
border-radius: 4px;
max-height: 90px;
/* width: 200px; */
transition: box-shadow .2s ease-in-out, transform .2s ease-in-out;

&:hover{
    box-shadow: 0px 0px 20px black;
    opacity: 1;
    transform: scale(1.1, 1.1);
}
`;

export default Weddings;