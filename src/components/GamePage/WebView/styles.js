import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const S = {
  Container: styled.div`
    width: 1000px;
    height: 95%;
    margin: auto;
    translate: 0 2.5%;
    background: ${({ theme }) => theme.white + '33'};
    border-radius: 20px;
    box-shadow: 0 4px 30px ${({ theme }) => theme.black + '20'};
    backdrop-filter: blur(1.8px);
    -webkit-backdrop-filter: blur(1.8px);
    border: 1px solid ${({ theme }) => theme.white + 'aa'};
    position: relative;
    user-select: none;
    display: flex;
    flex-direction: column;
  `,
  HomeIcon: styled(Link)`
    display: block;
    position: absolute;
    z-index: 1;
    top: 40px;
    left: -40px;
    width: 80px;
    height: 80px;
    padding: 10px;
    background: ${({ theme }) => theme.white + '33'};
    box-shadow: 2px 4px 40px ${({ theme }) => theme.black + '22'};
    border: 1px solid ${({ theme }) => theme.white + 'aa'};
    border-radius: 50%;
    text-decoration: none;
    color: ${({ theme }) => theme.mine_shaft};
    cursor: pointer;

    &:hover {
      scale: 1.05;
    }
  `,
  QuestionSection: styled.section`
    width: 100%;
    height: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Subject: styled.p`
    text-align: center;
    font-size: 15rem;
    color: ${({ theme }) => theme.mine_shaft};
  `,
  InputSection: styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    position: relative;
  `,
  Blackboard: styled.main`
    @font-face {
      font-family: Chalk;
      src: url('./font/Chalk.ttf');
    }

    position: absolute;
    width: 60%;
    height: 80%;
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
  `,
  NumberOfQuestion: styled.section`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  `,
  Current: styled.p`
    font-size: 2rem;
  `,
  Total: styled.p`
    font-size: 2rem;
  `,
}
