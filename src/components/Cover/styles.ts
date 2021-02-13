import styled, { css, DefaultTheme } from 'styled-components'
import { CoverTypes } from '.'

type topDetailTypes = {
  right?: boolean
  theme: DefaultTheme
} & Pick<CoverTypes, 'upside'>

export const Wrapper = styled.div`
  ${({ theme, upside }: topDetailTypes) => css`
    background-color: ${theme.colors.red};
    border: 2px solid ${theme.colors.black};
    border-bottom: none;
    border-radius: 8px 8px 0 0;
    /* Temporary box-shadow markup. It will appear after the action.
    /* box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75); */
    height: 165px;
    overflow: hidden;
    position: relative;
    width: 100%;
    z-index: ${theme.layers.base};

    ${upside && 'transform: rotateX(180deg);'}
  `}
`

export const TopDetail = styled.div`
  ${({ theme, right }: topDetailTypes) => css`
    align-items: center;
    border-radius: 100%;
    border: 5px solid ${theme.colors.black};
    display: flex;
    height: 130px;
    justify-content: center;
    left: -65px;
    position: absolute;
    top: -65px;
    width: 130px;

    ${right && `left: auto; right: -65px`};

    &::after {
      border-radius: 100%;
      border: 5px solid ${theme.colors.black};
      content: '';
      display: block;
      height: 50px;
      width: 50px;
    }
  `}
`

export const MiddleDetail = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.black};
    border-radius: 100%;
    border: 2px solid ${theme.colors.white};
    bottom: -90px;
    display: flex;
    height: 180px;
    justify-content: center;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    width: 180px;
    z-index: ${theme.layers.menu};

    &::after {
      border-radius: 100%;
      background-color: ${theme.colors.visorBlue};
      content: '';
      cursor: pointer;
      display: block;
      height: 110px;
      width: 110px;
    }
  `}
`
