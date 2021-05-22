import React, { Dispatch } from "react";
import styled from "styled-components";
import { SetStateAction } from "react";
import { FreeTime } from "./Interfaces";
import { GetDateFromReserveDate, GetTimeArrray } from "./utils";

interface Props {
  whichColumn: "AM" | "PM";
  setReserveDate: Dispatch<SetStateAction<string | null>>;
  reserveDate: string | null;
  blocks: FreeTime[] | undefined;
  datePickerValue: string;
  timezone: string;
}

export default function TimeBlocks({
  datePickerValue,
  whichColumn,
  setReserveDate,
  reserveDate,
  blocks,
  timezone,
}: Props) {
  if (!blocks) return <div />;
  null;
  return (
    <Container>
      {GetTimeArrray(blocks, whichColumn).map((block, i) => (
        <Block
          key={i}
          isSelected={GetDateFromReserveDate(reserveDate) === block}
          onClick={() => {
            setReserveDate(`${datePickerValue}T${block}-${timezone}`);
          }}
        >
          {block}
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
  color: ${({ isSelected }) => (isSelected ? "white" : "var(--color-text1)")};
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
