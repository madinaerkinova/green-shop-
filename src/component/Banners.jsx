import React from 'react';
import Slider from 'react-slick';
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import styled from 'styled-components';

export const Banners = () => {
    return (
      <Container>
          <Box>
            <Box.ImageWrapper>
              <Box.ImageWrapper.Image src={banner1} />
            </Box.ImageWrapper>
            <Box.Content>
              <Box.Content.Title>Summer Cactus & Succulents</Box.Content.Title>
              <Box.Content.Description>We are an online plant shop offering a wide range of cheap and trendy plants. </Box.Content.Description>
              <Button width='150px'>Find More</Button>
            </Box.Content>
         </Box>
          <Box>
            <Box.ImageWrapper>
              <Box.ImageWrapper.Image src={banner2} />
            </Box.ImageWrapper>
            <Box.Content>
              <Box.Content.Title>Styling Trends & Much More</Box.Content.Title>
              <Box.Content.Description>We are an online plant shop offering a wide range of cheap and trendy plants. </Box.Content.Description>
              <Button width='150px'>Find More</Button>
            </Box.Content>
         </Box>
      </Container>
    )
  }
  
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Box = styled.div`
  margin: 0 10px;
  
`;

Box.ImageWrapper = styled.div`
  /* Add additional styles here */
`;

Box.ImageWrapper.Image = styled.img`
max-width: 100%;
height: auto;
border-radius: 10px; /* Tasvirning kengaytirilgan qismiga radius qo'shamiz */
`;

Box.Content = styled.div`
  text-align: center;
  /* Add additional styles here */
`;

Box.Content.Title = styled.h2`
  color: #333;
  font-size: 24px;
  /* Add additional styles here */
`;

Box.Content.Description = styled.p`
  color: #666;
  font-size: 16px;
  /* Add additional styles here */
`;

const Button = styled.button`
background-color: green;
color: #fff;
border: none;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
margin-top: 10px; /* tugmachani tasvirlar orasidan pastga ko'taramiz */
`;
export default Banners;
