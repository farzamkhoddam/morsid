import styled from "styled-components";

interface Props {
  steps: string[];
  activeStep: number;
  className?: string;
}
const Stepper: React.FC<Props> = ({ steps, activeStep, className }) => {
  return (
    <Container className={className}>
      {steps.map((step, index) => {
        return (
          <StepDotsPair key={step} isLastItem={index + 1 === steps.length}>
            <Step label={step} active={index < activeStep} />
            {index + 1 !== steps.length && <DotnsLine />}
          </StepDotsPair>
        );
      })}
    </Container>
  );
};
export default Stepper;

interface StepProps {
  label: string;
  active: boolean;
}
const Step: React.FC<StepProps> = ({ label, active }) => {
  return (
    <StepContainer>
      <StepSymbolWrapper>
        <StepSymbol active={active} />
      </StepSymbolWrapper>
      <StepLabel active={active}>{label}</StepLabel>
    </StepContainer>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;
const StepDotsPair = styled.div<{ isLastItem: boolean }>`
  position: relative;
  flex-grow: ${({ isLastItem }) => (isLastItem ? "0" : "1")};
`;
const DotnsLine = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 0.5rem;
  border-bottom: 2px dashed #828282;
  margin: 0 1rem;
`;
const StepContainer = styled.div`
  width: fit-content;
  z-index: 1;
  position: relative;
`;
// const DotnsLinePatch = styled(DotnsLine)<{ order: "FIRST" | "LAST" | "OTHER" }>`
//   display: flex;
//   z-index: 5;
//   margin: 0;
//   width: 100%;
//   ${({ order }) => {
//     if (order === "FIRST") return "margin-left: 50%; width: 50%;";
//     else if (order === "LAST") return "margin-right: 50%; width: 50%;";
//   }}
// `;
const StepSymbolWrapper = styled.div`
  background-color: white;
  position: relative;
  z-index: 5;
  width: 1rem;
  margin: 0 auto;
  margin-bottom: 11px;
`;

const StepSymbol = styled.div<{ active: boolean }>`
  width: 1rem;
  height: 1rem;
  background-color: ${({ active }) => (active ? "#1d3330" : "white")};
  border: ${({ active }) =>
    active ? "2px solid #1d3330" : "2px solid #828282;"};
  border-radius: 50%;
  margin: 0 auto;
  z-index: 5;
  position: relative;
    &::before {
    content: "";
    width: 1rem;
    background-color: white;
    height: 100%;
    position: absolute;
    left: -17px;
}
  &::after {
    content: "";
    width: 1rem;
    background-color: white;
    height: 100%;
    position: absolute;
    right: -17px;
}
  }
`;
const StepLabel = styled.span<{ active: boolean }>`
  color: ${({ active }) => (active ? "#1d3330" : "#828282")};
`;
