import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { Link } from 'react-scroll';


const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome to my <br/>
          Portfolio
      </SectionTitle>
      <SectionText>
      Software Engineer at Moneyfarm <br/>Passionate about learning new technologies. <br/>
      Developed and published 3 mobile applications, both iOS and Android. 
      </SectionText>
      <Button>
      <Link to="footer" smooth={true} offset={80}>
        Contact me
        </Link>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;