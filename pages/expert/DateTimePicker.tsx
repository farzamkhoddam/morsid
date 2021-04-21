import * as React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { StaticDatePicker } from "@material-ui/lab";
import styled from "styled-components";

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
export default function MaterialUIPickers() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const [value, setValue] = React.useState<Date | null>(new Date());
  const startDate = new Date();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledDatePicker<Date>
        // orientation="landscape"
        className={classes.root}
        openTo="day"
        value={value}
        shouldDisableDate={disablePrevDates(startDate)}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
    </LocalizationProvider>
  );
}
const StyledDatePicker = styled(StaticDatePicker)`
  .MuiPickersDay-root.Mui-selected {
    background-color: var(--primary-color-dark);
    &:hover {
      background-color: var(--primary-color-darker);
    }
    &:focus {
      background-color: var(--primary-color-darker);
    }
  }
` as typeof StaticDatePicker;
