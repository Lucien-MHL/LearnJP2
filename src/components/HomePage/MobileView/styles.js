import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.mercury};
  `,
  Title: styled.header`
    margin-top: 40px;
    text-align: center;
    user-select: none;
  `,
  Main: styled.p`
    font-size: 4.5rem;
  `,
  Sub: styled.p`
    font-size: 3.15rem;
  `,
  LinkGroup: styled.main`
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin: auto;
  `,
  LinkButton: styled(Link)`
    color: ${({ theme }) => theme.mercury};
    writing-mode: vertical-lr;
    text-decoration: none;
    font-size: 1.75rem;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.mercury};
    border-radius: 15px;

    &:nth-child(even) {
      translate: 0 15px;
    }

    &:nth-child(odd) {
      translate: 0 -15px;
    }
  `,
}
