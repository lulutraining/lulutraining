import { Button } from '@mui/material';
import { Container } from './style';

interface PrevNextButtonProps {
  onClickNext?: () => void;
  onClickPrev: () => void;
  nextButtonType: 'button' | 'submit';
}

export const PrevNextButton = (props: PrevNextButtonProps) => {
  const { onClickPrev, onClickNext, nextButtonType } = props;

  return (
    <Container>
      <Button type="button" onClick={onClickPrev} className="button-prev">
        이전
      </Button>
      <Button type={nextButtonType} onClick={onClickNext} className="button-next">
        다음
      </Button>
    </Container>
  );
};
