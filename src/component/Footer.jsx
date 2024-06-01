import React from 'react';
import styled from 'styled-components';
import payments from '../assets/images/payments.png';

const Container = styled.footer`
  background-color: #f9f9f9;
  padding: 20px 0;
`;

const GreenArea = styled.div`
  background-color: #4CAF50;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Items = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  margin-bottom: 8px;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Social = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Payments = styled.img`
  width: 100px;
  margin-top: 10px;
`;

const Copyright = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: 12px;
  color: #777;
`;

export const Footer = () => {
  return (
    <Container>
      <GreenArea>
        <LogoWrapper>
          <Logo src="path/to/logo.png" alt="Logo" />
          <Title>GreenShop</Title>
        </LogoWrapper>
        <LogoWrapper>
          <Logo src="path/to/location-icon.png" alt="Location" />
          <Title>70 West Buckingham Ave. Farmingdale, NY 11735</Title>
        </LogoWrapper>
        <LogoWrapper>
          <Logo src="path/to/message-icon.png" alt="Message" />
          <Title>contact@greenshop.com</Title>
        </LogoWrapper>
        <LogoWrapper>
          <Logo src="path/to/phone-icon.png" alt="Call" />
          <Title>+88 01911 717 490</Title>
        </LogoWrapper>
      </GreenArea>

      <Wrapper>
        <Column>
          <ColumnTitle>My Account</ColumnTitle>
          <Items>
            <Item><Link href="#">My Account</Link></Item>
            <Item><Link href="#">Address</Link></Item>
            <Item><Link href="#">Wishlist</Link></Item>
          </Items>
        </Column>
        <Column>
          <ColumnTitle>Categories</ColumnTitle>
          <Items>
            <Item><Link href="#">House Plants</Link></Item>
            <Item><Link href="#">Potter Plants</Link></Item>
            <Item><Link href="#">Seeds</Link></Item>
            <Item><Link href="#">Small Plants</Link></Item>
            <Item><Link href="#">Accessories</Link></Item>
          </Items>
        </Column>
        <Column>
          <ColumnTitle>Social Media</ColumnTitle>
          <Socials>
            <Social><i className="fab fa-facebook-f"></i></Social>
            <Social><i className="fab fa-instagram"></i></Social>
            <Social><i className="fab fa-twitter"></i></Social>
            <Social><i className="fab fa-linkedin-in"></i></Social>
            <Social><i className="fab fa-youtube"></i></Social>
          </Socials>
          <ColumnTitle>We accept</ColumnTitle>
          <Payments src={payments} alt="Payment Methods" />
        </Column>
      </Wrapper>

      <Copyright>© 2021 GreenShop. All Rights Reserved.</Copyright>
    </Container>
  );
};

export default Footer;
