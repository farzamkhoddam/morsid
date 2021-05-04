import * as React from "react";
import { Divider, makeStyles, Modal } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { StaticDatePicker } from "@material-ui/lab";
import styled from "styled-components";
import { Body1, Body2, Caption } from "elements/typo";
import SelectTimezoneMaterialUi from "select-timezone-material-ui";
import { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import TimeBlocks from "./TimeBlock";
import { Paper } from "elements/Layout";
import { STEP } from ".";
import { Expert } from "consts/experts";
import Avatar from "components/Avatar";
import Stepper from "components/Stepper";
import { STEPS } from "./constants";

function disablePrevDates(startDate: Date) {
  const today = new Date();

  const todaySeconds = today.getTime();
  return (date: Date) => {
    return today.getTime() > date.getTime();
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "max-content",
  },
}));
function getGmt(date: Date | null): string {
  if (date) {
    var split = date.toString().split(" ");
    return split[5];
  }
  return "Unselected GTM";
}
interface Props {
  setStep: React.Dispatch<React.SetStateAction<STEP>>;
  currentExpert: Expert;
}

export default function MaterialUIPickers({ setStep, currentExpert }: Props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const [timezone, setTimeZone] = useState<string>(
    `${Intl.DateTimeFormat().resolvedOptions().timeZone} (${getGmt(
      new Date(),
    )})`,
  );
  const [datePickerValue, setDatePickerValue] = useState<Date | null>(
    new Date(),
  );
  const [isOpenModale, setOpenModal] = useState(false);
  const [amOrPm, setAmOrPm] = useState<"AM" | "PM" | null>(null);
  const [amOrPmIndex, setAmOrPmIndex] = useState<number | null>(null);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const startDate = new Date();
  return (
    <Container>
      <Paper>
        <Avatar
          alt={currentExpert.name}
          imageUrl={currentExpert.imageUrl}
          // style={{ marginBottom: "20px" }}
        />
        <Body1
          style={{
            color: "var(--primary-color-dark)",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >{`Set a meeting with ${currentExpert.name}`}</Body1>
        <StyledStepper steps={STEPS} activeStep={1} />

        <Row
          style={{
            marginBottom: "6px",
          }}
        >
          <Body2
            style={{
              color: "var(--text-color-dark)",
              marginRight: "6px",
            }}
          >
            Duration:
          </Body2>
          <Body2>1 Hour</Body2>
        </Row>
        <Row
          style={{
            marginBottom: "32px",
          }}
        >
          <YourTimeZone>Your time zone:</YourTimeZone>
          <Body2>{`${timezone}`}</Body2>
          <Body2
            onClick={handleOpenModal}
            style={{
              color: "var(--primary-color-dark)",
              marginLeft: "6px",
              cursor: "pointer",
            }}
          >
            change
          </Body2>
          <Modal
            open={isOpenModale}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            // aria-describedby="modal-modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <ModalContent>
              <Body2
                id="modal-modal-title"
                style={{
                  color: "var(--text-color-dark)",
                }}
              >
                Please select a timezone from the list
              </Body2>
              <SelectTimezoneMaterialUi
                label="Timezone"
                defaultTimezoneName={
                  Intl.DateTimeFormat().resolvedOptions().timeZone
                }
                showTimezoneOffset={true}
                onChange={(timezoneName: string, timezoneOffset: number) => {
                  setTimeZone(timezoneName);
                  // setSelectedDate();
                  handleCloseModal();
                }}
              />
            </ModalContent>
          </Modal>
        </Row>
        <Divider />
        <FlexRow>
          <FlexRowItem>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StyledDatePicker<Date>
                // orientation="landscape"
                className={classes.root}
                openTo="day"
                value={datePickerValue}
                shouldDisableDate={disablePrevDates(startDate)}
                onChange={(newValue) => {
                  setDatePickerValue(newValue);
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
                color: "var(--text-color-dark)",
                marginBottom: "20px",
                marginTop: "37px",
              }}
            >
              Available starting times for Wed, Apr 14, 2021
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
                  amOrPm={amOrPm}
                  setAmOrPm={setAmOrPm}
                  amOrPmIndex={amOrPmIndex}
                  setAmOrPmIndex={setAmOrPmIndex}
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
                  amOrPm={amOrPm}
                  setAmOrPm={setAmOrPm}
                  amOrPmIndex={amOrPmIndex}
                  setAmOrPmIndex={setAmOrPmIndex}
                />
              </FlexRowItem>
            </FlexRow>
          </FlexRowItem>
        </FlexRow>
        <Buttons>
          <Body2
            style={{ color: "var(--primary-color-dark)", cursor: "pointer" }}
          >
            Next &#x27F6;
          </Body2>
        </Buttons>
      </Paper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 2.5rem;
`;
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
const YourTimeZone = styled(Body2)`
  color: var(--text-color-dark);
  margin-right: 6px;
  flex-shrink: 0;
`;
const ModalContent = styled.div`
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border: 2px solid #000;
  boxshadow: 24;
  p: 4;
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
export const StyledStepper = styled(Stepper)`
  width: 700px;
  margin: 0 auto;
  margin-bottom: 2.5rem;
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
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 1rem;
  padding-right: 2.8rem;
`;
