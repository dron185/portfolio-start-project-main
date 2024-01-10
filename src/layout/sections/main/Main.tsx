import React from 'react';
import styled from 'styled-components';
import photo from "../../../assets/images/photo.jpg";
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
      <div>
        <span>Hi There</span>
        <Name>I am Andrey Huryn</Name>
        <MainTitle>A Web Developer.</MainTitle>
      </div>
      <Photo src={photo} alt="main photo" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #fff5e7;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  
`

const Name = styled.h2`
  
`