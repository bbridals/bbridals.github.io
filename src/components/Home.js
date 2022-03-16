import styled from "styled-components"
import {Content, Container} from "./styling";

const Home = (props) =>{
    return <HomeContainer>
        <img src="/images/bridesmaids-banner.jpg" alt="Bridal Store Banner"/>
        <Content> 
        <h2>
            Belle Bridals is a full service bridal boutique serving happy customers for over 15 years! We take pride in offering our customers a large selection of elegant, affordable, and versatile styles that flatter and compliment not only their figure, but also their personalities.
        </h2>
        <p>
            We believe that choosing a dress for your special occasion shouldn’t be a difficult process. Which is why we will make your experience with us enjoyable, memorable, and stress free! We take the time to build meaningful relationships with our customers and assist them every step of the way to finding their perfect dress.
            <br/>
            Give us a call to schedule an appointment! We are always happy to see familiar faces and to meet new ones.
        </p>

        <h2>
            Please note, shopping is available by <span style={{color:"#e350a1"}}>appointment only</span>.
            <br/>
            Please call <span style={{color:"#e350a1"}}>(732) 671-3800</span> to schedule an appointment. Thank you!
        </h2>
        </Content>
    </HomeContainer>
};

const HomeContainer = styled(Container)`
    img{
        margin: 0;
        padding: 10px 0 10px 0;
        max-width: 100%;
    }
`;


export default Home;