/* eslint-disable no-plusplus */
import React from 'react';
import styled from 'styled-components';

interface StarFallBackgroundProps {
  fallCount?: number;
  skyCount?: number;
}
function useStarFallBackground({
  fallCount = 20,
  skyCount = 300,
}: StarFallBackgroundProps) {
  const StarFall = renderStarFall(fallCount, getCoordinates(skyCount));
  return StarFall;
}

function renderStarFall(fallCount: number, coordinates: string) {
  return (
    <Container>
      <Star coordinates={coordinates} />
      {Array.from({ length: fallCount }).map((_, index) => {
        const key = `${index}${new Date().toString()}`;
        const xAxis = getRandomInt(0, 90) + 9;
        const yAxis = getRandomInt(10, 70) + 9;
        const duration = getRandomInt(0, 7) + 3;
        return (
          <FallingStar
            key={key}
            xAxis={xAxis}
            yAxis={yAxis}
            duration={duration}
          />
        );
      })}
    </Container>
  );
}

function getCoordinates(skyCount: number): string {
  const getRandomCoordinate = () => {
    const x = getRandomInt(0, window.innerWidth);
    const y = getRandomInt(0, window.innerHeight);
    return `${x}px ${y}px #fff`;
  };

  const values = [];
  for (let i = 0; i < skyCount; i++) {
    values.push(getRandomCoordinate());
  }
  return values.join(',');
}

function getRandomInt(min: number, max: number): number {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
}

export default useStarFallBackground;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: radial-gradient(ellipse at top, #080e21 0%, #1b2735 95%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

interface StarProps {
  coordinates: string;
}
const Star = styled.div<StarProps>`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${({ coordinates }) => coordinates};
`;

interface FallingStarProps {
  xAxis: number;
  yAxis: number;
  duration: number;
}
const FallingStar = styled.div<FallingStarProps>`
  position: absolute;
  top: ${({ yAxis }) => yAxis}%;
  left: ${({ xAxis }) => xAxis}%;
  width: 300px;
  height: 1px;
  transform: rotate(-45deg);
  background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
  animation: meteor ${({ duration }) => duration}s linear infinite;

  &:before {
    content: '';
    position: absolute;
    width: 4px;
    height: 5px;
    border-radius: 50%;
    margin-top: -2px;
    background: rgba(#fff, 0.7);
    box-shadow: 0 0 15px 3px #fff;
  }

  @keyframes meteor {
    0% {
      opacity: 1;
      margin-top: -300px;
      margin-right: -300px;
    }
    12% {
      opacity: 0;
    }
    15% {
      margin-top: 300px;
      margin-left: -600px;
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
