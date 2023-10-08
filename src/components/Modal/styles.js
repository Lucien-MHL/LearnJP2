import styled from 'styled-components'

export const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    backdrop-filter: blur(8px);
    user-select: none;
  `,
  Modal: styled.main`
    aspect-ratio: 3/4;
    width: 75%;
    max-width: 400px;
    background-color: ${({ theme }) => `${theme.mine_shaft}EE`};
    border: 2px solid ${({ theme }) => theme.mercury};
    border-radius: 10px;
    position: relative;
  `,
  CloseIcon: styled.button`
    background-color: ${({ theme }) => theme.mine_shaft};
    border: 1px solid ${({ theme }) => theme.mercury};
    border-radius: 50%;
    width: 45px;
    height: 45px;
    padding: 6px;
    position: absolute;
    top: 0;
    right: 0;
    translate: 45% -45%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,
  Title: styled.p`
    color: ${({ theme }) => theme.mercury};
    text-align: center;
    font-size: 28px;
    padding: 15px;
  `,
  FailsLog: styled.ul`
    list-style: none;
    width: 85%;
    height: calc(100% - 58px - 15px);
    margin: auto;
    outline: 1px solid ${({ theme }) => theme.mercury};
    /** 參考 https://codepen.io/t_afif/pen/VwxbdpV 別人的設計得到的靈感。
        稍微修改一下後，就得到了想要的 table 樣式。  */
    background: ${({ theme }) =>
        `conic-gradient(from 90deg at 1px 1px,transparent 90deg,${theme.mercury} 0)`}
      100% 35px / calc(100% - 1px - 2 * 33%) 100%;
  `,
  Row: styled.li`
    display: flex;
    height: 35px;
    align-items: center;

    &:not(:first-child) {
      margin: 8px 0;
    }
  `,
  Item: styled.p`
    width: calc(100% / 3);
    color: ${({ $color, theme }) => $color || theme.mercury};
    text-align: center;
    font-size: 24px;
  `,
}
