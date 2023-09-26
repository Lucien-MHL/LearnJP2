import{s as i,L as r,j as e}from"./index-c75df100.js";import{u as a}from"./useTranslation-58c8887c.js";const t={Container:i.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme:n})=>n.mercury};
  `,Title:i.header`
    margin-top: 40px;
    text-align: center;
    user-select: none;
  `,Main:i.p`
    font-size: 4.5rem;
  `,Sub:i.p`
    font-size: 3.15rem;
  `,LinkGroup:i.main`
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin: auto;
  `,LinkButton:i(r)`
    color: ${({theme:n})=>n.mercury};
    writing-mode: vertical-lr;
    text-decoration: none;
    font-size: 1.75rem;
    padding: 1rem;
    border: 1px solid ${({theme:n})=>n.mercury};
    border-radius: 15px;

    &:nth-child(even) {
      translate: 0 15px;
    }

    &:nth-child(odd) {
      translate: 0 -15px;
    }
  `};function l(){const{t:n}=a();return e.jsxs(t.Container,{children:[e.jsxs(t.Title,{children:[e.jsx(t.Main,{children:n("homepage_title.main")}),e.jsx(t.Sub,{children:n("homepage_title.sub")})]}),e.jsxs(t.LinkGroup,{children:[e.jsx(t.LinkButton,{children:n("hiragana")}),e.jsx(t.LinkButton,{children:n("katakana")}),e.jsx(t.LinkButton,{children:n("hiraganaDakuon")}),e.jsx(t.LinkButton,{children:n("katakanaDakuon")})]})]})}export{l as default};
