import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const S = {
  Container: styled.div`
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${({ theme }) => theme.mine_shaft};
  `,
  Header: styled.header`
    margin-top: 60px;
    text-align: center;
    user-select: none;
  `,
  Main: styled.p`
    font-size: 4.5rem;
  `,
  Sub: styled.p`
    font-size: 3.15rem;
  `,
  ListSection: styled.section`
    display: flex;
    margin: auto;
  `,
  LinkButton: styled(Link)`
    position: relative;
    color: ${({ theme }) => theme.mine_shaft};
    font-size: 1.75rem;
    writing-mode: vertical-rl;
    text-decoration: none;
    user-select: none;
    margin: 0 25px;
    width: 85px;
    height: 210px;
    text-align: center;
    transition: translate 0.2s ease-in-out;

    &::before {
      content: '';
      display: inline-block;
      width: 0;
      height: 100%;
      vertical-align: middle;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      margin: auto;
      z-index: -1;
      background: url('./lantern.png');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      width: 85px;
      height: 210px;
    }

    &:hover {
      translate: 0 -10px;
    }
  `,
}
