import { RadioButtonWrapper } from './Button.styles';
import CheckMark from 'assets/svg/CheckMark';
import { theme } from 'theme';
import FlexBox from 'components/FlexBox';

type RadioButtonType = {
  onClick?: () => void;
  selected?: boolean;
};

export const RadioButton: React.FunctionComponent<RadioButtonType> = ({
  onClick,
  selected,
}) => {
  return (
    <RadioButtonWrapper onClick={onClick} selected={selected}>
      {selected && (
        <FlexBox
          width="20px"
          height="20px"
          justifyContent="center"
          alignItems="center"
          margin="auto"
        >
          <CheckMark fill={theme.colors.whites[11]} />
        </FlexBox>
      )}
    </RadioButtonWrapper>
  );
};

export default RadioButton;
