import * as React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { StaticDatePicker } from "@material-ui/lab";
import styled from "styled-components";
import { Body2, Caption } from "elements/typo";
import { useState } from "react";
import TimeBlocks from "./TimeBlock";
import { FREE_TIMES } from "./Interfaces";
import moment from "moment";
import { disablePrevDates } from "./utils";

const useStyles = makeStyles(() => ({
  root: {
    width: "max-content",
  },
}));

interface Props {
  setReserveDate: React.Dispatch<React.SetStateAction<string | null>>;
  reserveDate: string | null;
  datesWithFreetimes: FREE_TIMES;
  timezone: string;
}

export default function MaterialUIPickers({
  datesWithFreetimes,
  setReserveDate,
  reserveDate,
  timezone,
}: Props) {
  const changeDateProcess = (newDate: Date) => {
    const dateString = moment(newDate).format("YYYY-MM-DD").toString();
    setDatePickerValue(dateString);
  };
  const classes = useStyles();
  const [datePickerValue, setDatePickerValue] = useState<string>(
    moment().format("YYYY-MM-DD").toString(),
  );

  return (
    <Container>
      <FlexRow>
        <FlexRowItem>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StyledDatePicker<Date>
              // orientation="landscape"
              className={classes.root}
              openTo="day"
              value={datePickerValue}
              shouldDisableDate={disablePrevDates()}
              onChange={(newValue) => {
                if (newValue) changeDateProcess(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} variant="standard" />
              )}
            />
          </LocalizationProvider>
        </FlexRowItem>
        <FlexRowItem>
          <Body2
            style={{
              color: "var(--color-text1)",
              marginBottom: "20px",
              marginTop: "37px",
            }}
          >
            {`Available starting times for ${moment(datePickerValue).format(
              "dddd, MMMM DD, YYYY",
            )}`}
          </Body2>
          <FlexRow
            style={{
              marginBottom: "1rem",
            }}
          >
            <FlexRowItem>
              <Caption
                style={{
                  marginBottom: "1rem",
                }}
              >
                AM
              </Caption>
              <TimeBlocks
                whichColumn="AM"
                setReserveDate={setReserveDate}
                reserveDate={reserveDate}
                blocks={datesWithFreetimes[datePickerValue]?.freeTimes}
                datePickerValue={datePickerValue}
                timezone={timezone}
              />
            </FlexRowItem>
            <FlexRowItem>
              <Caption
                style={{
                  marginBottom: "1rem",
                }}
              >
                PM
              </Caption>
              <TimeBlocks
                whichColumn="PM"
                setReserveDate={setReserveDate}
                reserveDate={reserveDate}
                blocks={datesWithFreetimes[datePickerValue]?.freeTimes}
                datePickerValue={datePickerValue}
                timezone={timezone}
              />
            </FlexRowItem>
          </FlexRow>
        </FlexRowItem>
      </FlexRow>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FlexRowItem = styled.div`
  flex: 1;
  margin: 0 auto;
  text-align: center;
`;

const StyledDatePicker = styled(StaticDatePicker)`
  .MuiPickersDay-today {
    border-radius: 50%;
  }
  .MuiPickersDay-root.Mui-selected {
    background-color: var(--primary-color-dark);
    border-radius: 50%;
    &:hover {
      background-color: var(--primary-color-darker);
    }
    &:focus {
      background-color: var(--primary-color-darker);
    }
  }
` as typeof StaticDatePicker;
