import{s as i,L as a,j as n}from"./index-c75df100.js";import{u as o}from"./useTranslation-58c8887c.js";const t={Container:i.div`
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${({theme:e})=>e.mine_shaft};
  `,Header:i.header`
    margin-top: 60px;
    text-align: center;
    user-select: none;
  `,Main:i.p`
    font-size: 4.5rem;
  `,Sub:i.p`
    font-size: 3.15rem;
  `,ListSection:i.section`
    display: flex;
    margin: auto;
  `,LinkButton:i(a)`
    position: relative;
    color: ${({theme:e})=>e.mine_shaft};
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
      width: 100%;
      height: 100%;
    }

    &:hover {
      translate: 0 -10px;
    }
  `};function l(){const{t:e}=o();return n.jsxs(t.Container,{children:[n.jsxs(t.Header,{children:[n.jsx(t.Main,{children:e("homepage_title.main")}),n.jsx(t.Sub,{children:e("homepage_title.sub")})]}),n.jsxs(t.ListSection,{children:[n.jsx(t.LinkButton,{children:e("hiragana")}),n.jsx(t.LinkButton,{children:e("katakana")}),n.jsx(t.LinkButton,{children:e("hiraganaDakuon")}),n.jsx(t.LinkButton,{children:e("katakanaDakuon")})]})]})}export{l as default};
