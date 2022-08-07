import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypeScriptLogo } from './assets/typescript.svg';
import { ReactComponent as EslintLogo } from './assets/eslint.svg';
import { ReactComponent as PrettierLogo } from './assets/prettier.svg';
import { ReactComponent as StyledComponentsLogo } from './assets/styled-components.svg';
import StarFall from './components/StarFall';

function App() {
  const BUILDING_BLOCKS = [
    {
      label: 'React',
      logo: React.useCallback(() => <ReactLogo />, []),
    },
    {
      label: 'Vite',
      logo: React.useCallback(() => <ViteLogo />, []),
    },
    {
      label: 'TypeScript',
      logo: React.useCallback(() => <TypeScriptLogo />, []),
    },
    {
      label: 'ESLint',
      logo: React.useCallback(() => <EslintLogo />, []),
    },
    {
      label: 'Prettier',
      logo: React.useCallback(() => <PrettierLogo />, []),
    },
    {
      label: 'Styled Components',
      logo: React.useCallback(() => <StyledComponentsLogo />, []),
    },
  ];

  return (
    <Container>
      <Title>TOYLERPLATE</Title>
      <SubTitle>- Building Blocks -</SubTitle>
      <BuildingBlocks>
        {BUILDING_BLOCKS.map(({ label, logo }) => {
          return (
            <Item key={label}>
              <IconContainer>{logo()}</IconContainer>
              <StyledLabel>{label}</StyledLabel>
            </Item>
          );
        })}
      </BuildingBlocks>
      <StarFall />
    </Container>
  );
}

export default App;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 96px;
  font-size: 64px;
  font-weight: 900;
`;

const SubTitle = styled.h2`
  margin-top: 48px;
  margin-bottom: 48px;
  font-size: 32px;
  font-weight: 600;
`;

const BuildingBlocks = styled.ul`
  padding-top: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 36px;
  & > :nth-child(odd) {
    position: relative;
    top: 10%;
  }
  & > :nth-child(even) {
    position: relative;
    top: 40%;
  }
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const IconContainer = styled.div`
  svg {
    width: 80px;
    height: 80px;
  }
`;

const StyledLabel = styled.span`
  font-size: 24px;
  font-weight: 400;
`;
