import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome to my <br/>
          Portfolio
      </SectionTitle>
      <SectionText>
      Java Developer at ExtraRed. <br/>Passionate about learning new technologies, 
      developed and published 3 mobile applications, both iOS and Android. 
      </SectionText>
      <Button onClick={()=>window.location = 'google.com'}>
        My Projects
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;