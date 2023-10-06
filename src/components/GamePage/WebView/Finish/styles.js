import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const S = {
  Header: styled.header`
    display: flex;
    justify-content: center;
    padding: 50px;
  `,
  Title: styled.p`
    color: ${({ theme }) => theme.mine_shaft};
    font-size: 64px;
    font-weight: bold;
  `,
  FailingDisplay: styled.section`
    @font-face {
      font-family: Chalk;
      src: url('./font/Chalk.ttf');
    }

    width: 60%;
    margin: auto;
    background-color: ${({ theme }) => theme.dark_green};
    border-width: 7px 11px;
    border-style: solid;
    border-color: ${({ theme }) => theme.brown};
    border-radius: 7px;
    box-shadow: ${({ theme }) => theme.mine_shaft} 2px 2px 6px 0px inset,
      ${({ theme }) => theme.mine_shaft} -2px -2px 6px 1px inset;

    & > * {
      color: ${({ theme }) => theme.mercury};
      font-family: Chalk;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4px 0;
    user-select: none;
  `,
  Row: styled.div`
    display: flex;
    width: 100%;
    padding: 8px 0;
  `,
  Item: styled.p`
    width: 33%;
    text-align: center;
    font-size: 36px;
    color: ${({ $color, theme }) => ($color ? $color : theme.mercury)};

    &:nth-child(1) {
      font-size: 48px;
    }
  `,
  LinkGroup: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    /* TODO: 
         如果有錯誤的題目，則 margin-top 為 85px，
         其餘則為 auto。
     */
    margin-top: auto;
    height: 35%;
  `,
  link: styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 110px;
    height: 230px;
    margin: 0 25px;
    text-decoration: none;
    writing-mode: vertical-lr;
    color: ${({ theme }) => theme.mine_shaft};
    font-size: 22px;
    user-select: none;
    text-align: center;
    transition: translate 0.2s ease-in-out;

    &:nth-child(1) {
      font-size: 44px;
    }

    &:nth-child(2) {
      font-size: 32px;
    }

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      margin: auto;
      z-index: -1;
      background: url('./lantern.png');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    &:hover {
      translate: 0 -10px;
    }
  `,
}
