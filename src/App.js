import React from 'react';
import styled from 'styled-components';


// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: burlywood;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  font-family: cursive;
  color: #333;
  text-decoration: none;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-left: 20px;
  font-family: cursive;
`;

const Hero = styled.section`
  display: flex;
  justify-content: center;
  border-radius: 7px;
  align-items: center;
  height: 400px;
  background-color: antiquewhite;//#f5f5f5;
`;

const HeroText = styled.h1`
  font-size: 48px;
  color: #333;
  font-family: cursive;
`;

const About = styled.section`
  padding: 40px 0;
`;

const AboutText = styled.p`
  font-size: 18px;
  color: black;
  font-family: cursive;
`;

const Services = styled.section`
  padding: 60px 0;
  background-color: antiquewhite;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  border-radius: 7px;
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ServiceIcon = styled.img`
  width: 80px;
  margin-right: 20px;
`;
const ServiceText = styled.p`
  font-size: 18px;
  color: #333;
  font-family: cursive;
`;

const Projects = styled.section`
  padding: 80px 0;
  background-color: antiquewhite;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  border-radius: 7px;
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProjectIcon = styled.img`
  width: 250px;
  height: 200px
  margin-right: 20px;
`;

const ProjectText = styled.p`
  font-size: 18px;
  color: #333;
  font-family: cursive;
`;



const Contact = styled.section`
  padding: 80px 0;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  
`;

const FormInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 20px;
`;

const FormButton = styled.button`
  padding: 10px;
  font-size: 18px;
  color: #fff;
  background-color: #373;
  border: none;
  font-family: cursive;
  cursor: pointer;
  border-radius: 20px;
`;

const Footer = styled.footer`
  background-color: antiquewhite;
  color: #333;
  padding: 20px 0;
  text-align: center;
  font-family: cursive;
  border-radius: 7px;
  
`;

// React component
const App = () => {
  return (
    <Container>
      <Navbar>
        <Logo href="/">Adesh Patil</Logo>
        <Menu>
          <MenuItem>
            <a href="#about">About</a>
          </MenuItem>
          <MenuItem>
            <a href="#services">Skills</a>
          </MenuItem>
          <MenuItem>
            <a href="#projects">Projects</a>
          </MenuItem>
          <MenuItem>
            <a href="#contact">Contact</a>
          </MenuItem>
        </Menu>
      </Navbar>

      <Hero>
        <HeroText>Welcome to My Portfolio</HeroText>
      </Hero>

      <About id="about">
        <AboutText>
          I am a passionate web developer with experience in building modern and
          responsive websites. Looking for a challenging opportunity in a reputed company. 
          A good profile that would help me in enhancing my skills, strengthening my knowledge
          and realizing my potential, which can contribute to the company's growth.

        </AboutText>
      </About>

      <h2 style={{ fontFamily: 'cursive' }}>My Skills </h2>
      <Services id="services">
        <ServiceItem>
          <ServiceIcon src="/skills/html.png" alt="Service 1" />
          <ServiceText>HTML</ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src="/skills/css.png" alt="Service 2" />
          <ServiceText>CSS</ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src="/skills/javascript.png" alt="Service 3" />
          <ServiceText>Java Script</ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src="/skills/logo512.png" alt="Service 1" />
          <ServiceText>React JS</ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src="/skills/mysql.jpg" alt="Service 2" />
          <ServiceText>MySQL</ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src="/skills/node js.png" alt="Service 3" />
          <ServiceText>Node JS</ServiceText>
        </ServiceItem>
      </Services>

      <h2 style={{ fontFamily: 'cursive' }}>My Projects</h2>
      <Projects id="projects">
        <ProjectItem>
          <ProjectIcon src="/skills/gallery.jpg" alt="Service 1" />
          <ProjectText>Image Sorting Gallery</ProjectText>
        </ProjectItem>
        <ProjectItem>
          <ProjectIcon src="/skills/evote.jpg" alt="Service 2" />
          <ProjectText>Web Based Secure Voting System using AWS Cloud</ProjectText>
        </ProjectItem>
        <ProjectItem>
          <ProjectIcon src="/skills/todo.jpg" alt="Service 3" />
          <ProjectText>My Todo List</ProjectText>
        </ProjectItem>
      </Projects>


      <Contact id="contact">
        <ContactForm action="gmailto:acpatil9420@gmail.com" method="post" encType="text/plain">
          <FormInput type="text" placeholder="Name" />
          <FormInput type="email" placeholder="Email" />
          <FormInput type="text" placeholder="Message" />
          <FormButton type="submit" >Send Message</FormButton>
        </ContactForm>
      </Contact>

      <Footer>
        &copy; 2023 My Portfolio. All rights reserved. | Made with ❤️ by Adesh Patil
      </Footer>
    </Container>
  );
};

export default App;
