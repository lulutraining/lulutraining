import { Container } from './style';

interface PrevNextButtonProps {
  onClickNext?: () => void;
  onClickPrev: () => void;
}

export const PrevNextButton = (props: PrevNextButtonProps) => {
  const { onClickPrev, onClickNext } = props;

  return (
    <Container>
      <button type="button" onClick={onClickPrev} className="button-prev">
        이전
      </button>
      <button type="submit" onClick={onClickNext} className="button-next">
        다음
      </button>
    </Container>
  );
};
