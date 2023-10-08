import styled from 'styled-components'

export const S = {
  IconSection: styled.button`
    position: absolute;
    background-color: transparent;
    border: none;
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
    ${({ $position }) => $position}
  `,
  Clickable: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
  `,
  ShowFailsNumber: styled.p`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.red};
    border-radius: 50%;
    color: ${({ theme }) => theme.mercury};
    translate: -40% 35%;
    text-align: center;
    line-height: 20px;
  `,
}
