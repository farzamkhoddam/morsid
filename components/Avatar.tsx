import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface Props {
  alt: string;
  imageUrl: string;
  className?: string;
}
export default function Avatar({ alt, imageUrl, className }: Props) {
  return (
    <Container className={className}>
      <Ring>
        <ImageContainer>
          <Image
            src={imageUrl}
            alt={alt}
            width={95}
            height={95}
            quality={100}
          />
        </ImageContainer>
      </Ring>
    </Container>
  );
}
const Container = styled.div`\
display: flex;
justify-content: center;

`;
const Ring = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 110px;
  border: 3px solid var(--primary-color-light);
  border-radius: 50%;
  margin-top: 0.5rem;
  margin-bottom: 20px;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 50%;

  div {
    border-radius: 50%;
  }
`;
