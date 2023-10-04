import{s as t,L as o,j as i}from"./index-663feaa6.js";import{l as a}from"./linkData-bfd32c78.js";import{u as s}from"./useTranslation-384fdf52.js";const n={Container:t.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme:e})=>e.mercury};
  `,Title:t.header`
    margin-top: 40px;
    text-align: center;
    user-select: none;
  `,Main:t.p`
    font-size: 4.5rem;
  `,Sub:t.p`
    font-size: 3.15rem;
  `,LinkGroup:t.main`
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin: auto;
  `,LinkButton:t(o)`
    color: ${({theme:e})=>e.mercury};
    writing-mode: vertical-lr;
    text-decoration: none;
    font-size: 1.75rem;
    padding: 1rem;
    border: 1px solid ${({theme:e})=>e.mercury};
    border-radius: 15px;

    &:nth-child(even) {
      translate: 0 15px;
    }

    &:nth-child(odd) {
      translate: 0 -15px;
    }
  `};function m(){const{t:e}=s();return i.jsxs(n.Container,{children:[i.jsxs(n.Title,{children:[i.jsx(n.Main,{children:e("homepage_title.main")}),i.jsx(n.Sub,{children:e("homepage_title.sub")})]}),i.jsx(n.LinkGroup,{children:a().map(r=>i.jsx(n.LinkButton,{to:r.link,children:e(r.key)},r.key))})]})}export{m as default};