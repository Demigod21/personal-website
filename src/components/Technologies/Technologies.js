import React from 'react';
import { DiAndroid, DiJava, DiAws, DiFirebase } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range of technologies during my carreer, from Backend, to Mobile, passing through CI/CD.
  </SectionText>
  <List>
    <ListItem>
      <picture>
        <DiJava size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Java, Kotlin, C#, Maven, Junit, SpringBoot, OpenLegacy
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiAndroid size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Mobile</ListTitle>
        <ListParagraph>
          Experience with <br />
          Flutter, Dart, Android Studio and xCode
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiFirebase size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Others</ListTitle>
        <ListParagraph>
          Experience with <br />
          AWS, Firebase, PostgreSQL, Git
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  <SectionDivider colorAlt />
</Section>
);

export default Technologies;
