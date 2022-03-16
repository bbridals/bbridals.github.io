import styled from "styled-components";

const Header = (props) => {    

    return <Nav>
        <NavItems style={{justifyContent: "right"}} >
            <a href="/">
                <span>HOME</span>
            </a>
            <a href="/#/prom">
                <span>PROM</span>
            </a>
            
            <a href="/#/weddings">
                <span>WEDDINGS</span>
            </a>
    
            </NavItems>


            <Logo> 
                <a href="/">
                <img style={{height: "125px"}} src="/images/dark-logo.png" alt="Belle Bridal Logo"/>
                </a>
            </Logo>
            
            
            <NavItems style={{justifyContent: "left"}} >

            <a href="/#/customers">
                <span>OUR CUSTOMERS</span>
            </a>
            {/* <a href="/#/contact">
                <span>CONTACT</span>
            </a> */}
           
            <a href="/#/about">
                <span>ABOUT</span>
            </a>
        </NavItems>
    </Nav>;
};

const Nav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    height: 150px;
    display: flex;
    position: absolute;
    justify-content: center;
    align-content: center;
    align-items:center;
    @media (max-width: 768px){
            height: 70px;
        }
`;
const Logo = styled.div`
        a{
            display:flex;
            flex: 1;
            align-items:center;
        }
        img{
            min-width: 20px;
            /* height: 125px; */
            z-index:auto;
            margin: 0px 20px;
        }   
        @media (max-width: 768px){
            display:none;
        }
`;

const NavItems = styled.div`
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    align-items:center;
    margin:0px;
    padding:0px;
    max-width:50%;
    min-width: 25%;
    background-color: white;
    
    a{
        display:flex;
        align-items:center;
        padding: 0 20px;
        
        
    span{
        color:black;
        font-size: 25px;
        letter-spacing:1.4px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;

        &:before{
        background-color: black;
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        opacity: 1;
        height: 2px;
        right: 0px;
        left: 0.5px;
        position: absolute;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s;
        visibility: hidden;
        width: auto;
        }
    }
        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1;
            } 
        }
    @media (max-width: 768px){
        span{font-size: 14px}
    }
    }
    @media (max-width: 768px){
        a{padding: 0px 10px;}
    }
    
`;
export default Header;