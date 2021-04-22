import React, { Dispatch } from "react";
import styled from "styled-components";
import { Caption } from "elements/typo";
import { SetStateAction } from "react";

const amLabels = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
];
const pmLabels = [
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
];
interface Props {
  whichColumn: "AM" | "PM";
  amOrPm: "AM" | "PM" | null;
  setAmOrPm: Dispatch<SetStateAction<"AM" | "PM" | null>>;
  amOrPmIndex: number | null;
  setAmOrPmIndex: Dispatch<SetStateAction<number | null>>;
}
export default function TimeBlocks({
  whichColumn,
  amOrPm,
  setAmOrPm,
  amOrPmIndex,
  setAmOrPmIndex,
}: Props) {
  const whichColumnArray = whichColumn === "AM" ? amLabels : pmLabels;

  return (
    <Container>
      {whichColumnArray.map((whichColumnLabel, i) => (
        <Block
          key={i}
          isSelected={amOrPm === whichColumn && amOrPmIndex === i}
          onClick={() => {
            setAmOrPm(whichColumn);
            setAmOrPmIndex(i);
          }}
        >
          {whichColumnLabel}
        </Block>
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Block = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 164px;
  height: 42px;

  background-color: ${({ isSelected }) =>
    isSelected ? "var(--primary-color-dark)" : "#e6f1ff"};
  color: ${({ isSelected }) =>
    isSelected ? "white" : "var(--text-color-dark)"};
  border-radius: 8px;
  margin-bottom: 20px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  &:hover {
    color: white;
    background-color: var(--primary-color-dark);
  }
`;
