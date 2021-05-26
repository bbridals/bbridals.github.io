import styled from "styled-components"

const Home = (props) =>{
    return <Container>
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
            (732) 671-3800
            <br/>
            Please note, due to COVID-19 we will not be taking any walk-ins.
            <br/>
            Additionally, masks are required in store. Thank you!
           
            
        </h2>
        </Content>
    </Container>
};


const Container = styled.div`
    margin-top: 160px;
    display: flexbox;
    flex-flow: column wrap;
    overflow: block;
    justify-content: center;
    img{
        margin: 0;
        padding: 10px 0 10px 0;
        max-width: 100%;
    }
`;

const Content = styled.div`
    width: 50%;
    display: flexbox;
    flex-flow: column wrap;
    overflow: block;
    justify-content: center;
    text-align: center;
    
`;

export default Home;