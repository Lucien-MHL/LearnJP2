import{s as n,L as o,u as a,j as t}from"./index-e5eb4c3a.js";import{l as s}from"./linkData-797a6195.js";const i={Container:n.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme:e})=>e.mercury};
  `,Title:n.header`
    margin-top: 40px;
    text-align: center;
    user-select: none;
  `,Main:n.p`
    font-size: 4.5rem;
  `,Sub:n.p`
    font-size: 3.15rem;
  `,LinkGroup:n.main`
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin: auto;
  `,LinkButton:n(o)`
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
  `};function c(){const{t:e}=a();return t.jsxs(i.Container,{children:[t.jsxs(i.Title,{children:[t.jsx(i.Main,{children:e("homepage_title.main")}),t.jsx(i.Sub,{children:e("homepage_title.sub")})]}),t.jsx(i.LinkGroup,{children:s().map(r=>t.jsx(i.LinkButton,{to:r.link,children:e(r.key)},r.key))})]})}export{c as default};
