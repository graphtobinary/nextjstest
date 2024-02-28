import { CheckboxButtonWrapper } from './Button.styles';
import { theme } from 'theme';
import CheckBoxIcon from 'assets/svg/CheckBoxIcon';

type CheckboxButtonType = {
  onClick?: () => void;
  selected?: boolean;
};

const CheckboxButton: React.FunctionComponent<CheckboxButtonType> = ({
  onClick,
  selected,
}) => {
  return (
    <CheckboxButtonWrapper onClick={onClick} selected={selected}>
      {selected && (
        <CheckBoxIcon
          fillOuter={theme.colors.whites[11]}
          fillInner={theme.colors.whites[4]}
        />
      )}
    </CheckboxButtonWrapper>
  );
};

export default CheckboxButton;
