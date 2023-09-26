import styled, { css } from 'styled-components'

const webBackground = css`
  position: relative;
  background-image: url('./templeWithFuji.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(1px); //這行會影響背景顯示

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    z-index: -99;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.mercury + '77'};
    backdrop-filter: blur(1px);
  }
`

export const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    /* TODO:
         條件式渲染。
         For Web show webBackground.
         For mobile show pickled_blue_wood.
    */
    /* ${webBackground} */
    background-color: ${({ theme }) => theme.pickled_blue_wood};
  `,
}
