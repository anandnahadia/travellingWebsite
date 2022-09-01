import { Button } from '@material-ui/core'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { hover } from '@testing-library/user-event/dist/hover'
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { sliderItems } from '../data'
import {mobile} from '../responsive'




const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})};
`
// const Container = {
//     width: '100vw',
//     height: '100vh', //full screen slider
//     display: 'flex',
//     position: 'relative',  //parent should be relative if u are using absolute
//     overflow: 'hidden'
// }
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction==="left" && "10px"};
    right: ${props => props.direction==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease; 
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`
// transform: translateX(${(props) => props.slideIndex * -100}vw);
// const Wrapper = {
//     height: '100%',
//     display: 'flex',
//     transform: 'transalateX(' + this.props.slideIndex * -100 + 'vw)'
// }
const Slides = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
}
const ImgContainer = {
    
    flex: 1,
    color: '#0077b5',
}
const InfoContainer = {
    flex: 1,
}

const Title = styled.h1`
    font-size: 70px;
    color: #35363C;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const Description = styled.p`
    margin: 50px 10px;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 3px;
    color: #8A6350;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const Deals = styled.h2`
    font-size: 35px;
    color: #808392;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const Details = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: #4B4F4B;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.1);
    }
    
`
const Btn = {
    backgroundColor: 'transparent',
    padding: '10px',
    fontSize: '15px',
    cursor: 'pointer',
    backgroundColor: 'teal',
    color: 'white',
    
}
const Image = styled.img`
    height: 100%;
    width: 80%;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.1);
    }
`
export const Slider = () => {
    const [sliderIndex,setSliderIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left") {
            setSliderIndex(sliderIndex>0?sliderIndex-1:2)
        }else{
            setSliderIndex(sliderIndex<2?sliderIndex+1:0)
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={sliderIndex}>
            {sliderItems.map((item)=>(
                <div style={Slides}>
                    <div style={ImgContainer}>
                        {/* <Image src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5559085/2018/5/9/11525849854374-Athena-Women-Burgundy-Solid-Maxi-Dress-4291525849853320-1.jpg"/> */}
                        <Image src={item.img}/>
                        
                    </div>
                    <div style={InfoContainer}>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Deals>{item.deals}</Deals>
                        <Details>{item.details}</Details>
                        <Button style={Btn}  variant="contained" >SEARCH NOW</Button>
                    </div>
                </div>
            )
            )}
        </Wrapper>
        <Arrow direction="right"  onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}