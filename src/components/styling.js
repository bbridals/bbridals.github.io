import styled from "styled-components"

const Container = styled.div`
    margin-top: 160px;
    display: flexbox;
    flex-flow: column wrap;
    overflow: block;
    justify-content: center;
    height: 100%;
    margin-bottom: 100px;
    @media screen and (max-width: 768px){
        margin-top: 70px;
    }
`;

const Content = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    align-content: space-around;
    text-align: center;

    @media screen and (max-width: 768px){
        width:100%;
    }
`;

export const BrandLogo = styled.img`
    margin-top: 25px;
    max-width: 100%;
    border-radius: 4px;
    max-height: 90px;
    transition: box-shadow .2s ease-in-out, transform .2s ease-in-out;

    @media screen and (max-width: 768px){
        width:60%;
    }
    &:hover{
        box-shadow: 0 0 30px #f075a9;
        opacity: 1;
        transform: scale(1.1, 1.1);
    }
`;

export {Content, Container};