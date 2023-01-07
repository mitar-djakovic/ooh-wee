import styled from 'styled-components';

import { Status } from '../../types';

type Button = {
  variant: Status;
  disabled: boolean;
  fullWidth: boolean;
  outlined: boolean;
};

const ButtonStyled = styled.button<Button>`
  font-weight: ${(props) => props.theme.typography.paragraphs.p1.fontWeight};
  font-size: ${(props) => props.theme.typography.paragraphs.p1.fontSize};
  line-height: ${(props) => props.theme.typography.paragraphs.p1.lineHeight};
  background-color: ${(props) =>
    props.outlined ? '#FFF' : props.theme.colors[props.variant].main};
  box-sizing: border-box;
  padding: 0.8rem 3rem;
  border: 0.1rem solid ${(props) => props.theme.colors[props.variant].main};
  border-radius: 4.8rem;
  color: ${(props) =>
    props.outlined ? props.theme.colors[props.variant].main : '#FFF'};
  font-style: normal;
  letter-spacing: 0.02rem;
  width: ${(props) => props.fullWidth && '100%'};
  display: flex;
  align-items: center;
  justify-content: center;
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

const IconWrapper = styled.div`
  margin-right: 1rem;
`;

export { ButtonStyled, IconWrapper };
