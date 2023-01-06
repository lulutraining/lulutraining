import { Ring } from '@uiball/loaders';
import { Container } from './style';

interface LoaderProps {
  loaderText?: string;
}

export const Loader = ({ loaderText }: LoaderProps) => {
  return (
    <Container>
      <Ring size={250} lineWeight={3} speed={2} color="#060433" />
      {loaderText && <span className="loader-text">{loaderText}</span>}
    </Container>
  );
};
