import styled from "styled-components"
import {Content, Container} from "./styling";

const Customers = (props) =>{
    document.title="Our Customers"

    return <>
    <Container>
    <Content>
        <h2>Our Customers</h2>
        <h2>Jenny: Married 9/1/16</h2>
        <p>“Kim and her staff at Belle Bridals are amazing! They accommodated my rowdy bridesmaids of 8 and we found something for everyone, even my mom! They were patient and gave us great suggestions. I would shop there again for a special event, hands down!”</p>
        
        <CustomerImages src="/images/customers/jenny/jenny.png" />

        <h2>Laura : Married 12/4/16</h2>
        <p>Wedding Gown: Casablanca 2072
            <br/>
            Bridesmaids: B2 B3045</p>
        <CustomerImages src="/images/customers/laura/laura.png" />
        <CustomerImages src="/images/customers/laura/laura2.png" />

        <h2>Krystal: Married 8/25/17</h2>
        <p>Wedding Gown: Casablanca 2201
            <br/>
            Bridesmaids: Venus BM1314 
            <br/>
            Photographer: Limelight Entertainment 
            <br/>
            <a href="https://limelightentertainmentnj.com/photography/krystal-chriss-nautical-wedding-molly-pitcher-inn-red-bank-nj/">
                <p>Click here to read Krystal's wedding story!</p>
            </a>
            </p>
                    
        <CustomerImages src="/images/customers/krystal/krystal2.png" />
        <CustomerImages src="/images/customers/krystal/krystal.png" />

    </Content>
    </Container>
    </>
};

const CustomerImages = styled.img`
    margin-top: 25px;
    max-width: 80%;
    width: 100%;
    border-radius: 4px;
    /* max-height: 200px; */
`;
export default Customers;