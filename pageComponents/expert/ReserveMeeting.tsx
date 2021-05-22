import * as React from "react";
import { Divider, makeStyles, Modal } from "@material-ui/core";
import { StaticDatePicker } from "@material-ui/lab";
import styled from "styled-components";
import { Body1, Body2 } from "elements/typo";
import SelectTimezoneMaterialUi from "select-timezone-material-ui";
import { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { Paper } from "elements/Layout";

import { Expert } from "consts/experts";
import Avatar from "components/Avatar";
import StripeButton from "./StripeButton";
import { FREE_TIMES } from "./Interfaces";
import { QueryObserverResult, useQuery } from "react-query";
import toast from "react-hot-toast";
import axios, { AxiosResponse } from "axios";
import MaterialUIPickers from "./MaterialUIPickers";
import Loading from "components/loading";
import { modalsContext } from "contexts/modalContext";
import { useContext } from "react";

function getGmt(date: Date | null): string {
  if (date) {
    var split = date.toString().split(" ");
    return split[5];
  }
  return "Unselected GTM";
}
interface Props {
  currentExpert: Expert;
}

export default function ReserveMeetitg({ currentExpert }: Props) {
  const [reserveDate, setReserveDate] = useState<string | null>(null);

  // به صورت دیفالت تایم زون بروزر رو ست میکنیم

  const [timezone, setTimeZone] = useState<string>(
    `${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
  );
  const [isOpenModale, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const {
    isLoading,
    error,
    data,
  }: QueryObserverResult<AxiosResponse<any>, unknown> = useQuery(
    ["repoData", currentExpert.slug],
    () =>
      axios.post("/api/get-free-times", {
        user: currentExpert.email,
        timezone: timezone.split(" ")[0].toString(),
      }),
  );
  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    //@ts-ignore
    toast.error(`An error has occurred:  ${error?.message || " unknown"}`);
    return <h1>error</h1>;
  }

  const datesWithFreetimes: FREE_TIMES = data?.data?.data;

  return (
    <Container>
      <Paper>
        <Avatar
          alt={currentExpert.name}
          imageUrl={currentExpert.imageUrl}
          slug={currentExpert.slug}
        />
        <Body1
          style={{
            color: "var(--primary-color-dark)",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >{`Set a meeting with ${currentExpert.name}`}</Body1>
        <Body1
          style={{
            color: "var(--color-text1)",
            marginBottom: "20px",
          }}
        >
          Pick a date and time
        </Body1>
        <Row
          style={{
            marginBottom: "6px",
          }}
        >
          <Body2
            style={{
              color: "var(--color-text1)",
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
                  color: "var(--color-text1)",
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
                  setTimeZone(timezoneName.split(" ")[0]);
                  // setSelectedDate();
                  handleCloseModal();
                }}
              />
            </ModalContent>
          </Modal>
        </Row>
        <Divider />
        <MaterialUIPickers
          datesWithFreetimes={datesWithFreetimes}
          setReserveDate={setReserveDate}
          reserveDate={reserveDate}
          timezone={timezone}
        />
        {reserveDate ? (
          <Body1 style={{ color: "var(--color-text1)", marginBottom: "30px" }}>
            Please pay
            <span
              style={{ color: "var(--primary-color-dark)" }}
            >{` $${currentExpert.price} `}</span>
            for 60 minutes meeting
          </Body1>
        ) : (
          <Body1 style={{ color: "var(--color-text1)", marginBottom: "30px" }}>
            Please select the date and time first and then pay the bill
          </Body1>
        )}

        <StripeButton
          currentExpert={currentExpert || ({} as Expert)}
          // isPayActive={isPayActive}
          reserveDate={reserveDate}
        />
      </Paper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 2.5rem;
  margin-bottom: 5rem;
`;
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
const YourTimeZone = styled(Body2)`
  color: var(--color-text1);
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
const LoadingPage = styled(Loading)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
`;
