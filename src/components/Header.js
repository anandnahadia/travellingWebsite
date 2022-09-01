import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive';
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons'
const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})};
`
const Wrapper = styled.div`
    padding: 2px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "0px 0px"})};
    
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 10px;
`
const Logo = styled.img`
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: top;
    height: 100px;
    justify-content: flex-end;
    ${mobile({justifyContent: "center",flex: 2})};
`
const SocialContainer = styled.div`
    display: flex;
    
`
const SocialIcon = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.2);
    }
`
const Contact = styled.div`
    display: flex;
    margin: 5px 0px;
`

const Number = styled.div`
    margin: 0px 5px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        color: blue;
    }
`

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo src="../logo.png" />
            </Left>
            <Right>
            <SocialContainer>
                <a style= {{textDecoration: "none"}}href = "#">  
                    <SocialIcon color="#3b5998"><Facebook style={{width: '20px',height: '20px'}}/></SocialIcon>
                </a>
                <a style= {{textDecoration: "none"}}href = "#">  
                <SocialIcon color="#E4405F">
                    <Instagram />
                </SocialIcon>
                </a>
                <a style= {{textDecoration: "none"}}href = "#">  
                <SocialIcon color="#55acee">
                    <Twitter />
                </SocialIcon>
                </a>
                <a style= {{textDecoration: "none"}}href = "">  
                <SocialIcon color="#0077b5">
                    <LinkedIn />
                </SocialIcon>
                </a>
                <Contact>|<Number> +917018626342 </Number>|</Contact>
                <Contact><Number> anandnahadia0@gmail.com </Number></Contact>
            </SocialContainer>
            
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Header