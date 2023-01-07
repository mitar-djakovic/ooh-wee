import styled from 'styled-components';

import { Status } from '../../types';

type RoundButton = {
  variant: Status;
  disabled: boolean;
  outlined: boolean;
};

const RoundButtonStyled = styled.button<RoundButton>`
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.outlined ? '#FFF' : props.theme.colors[props.variant].main};
  border: 0.1rem solid ${(props) => props.theme.colors[props.variant].main};

  &:disabled {
    background-color: ${(props) =>
      props.outlined ? '#FFF' : props.theme.colors[props.variant].light};
    color: ${(props) =>
      props.outlined ? props.theme.colors[props.variant].light : '#FFF'};
    border: 0.1rem solid ${(props) => props.theme.colors[props.variant].light};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => {
      if (props.disabled) {
        return props.theme.colors[props.variant].light;
      } else {
        return props.outlined
          ? '#FFF'
          : props.theme.colors[props.variant].hover;
      }
    }};
    border: 0.1rem solid ${(props) => {
      if (props.disabled) {
        return props.theme.colors[props.variant].light;
      } else {
        return props.theme.colors[props.variant].hover;
      }
    }}
`;

export { RoundButtonStyled };
