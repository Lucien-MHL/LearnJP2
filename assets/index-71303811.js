import{s as o,L as m,r as h,j as t,n as g,u as f,a,b as p}from"./index-6cebc831.js";import{u as b,P as r,H as w}from"./Home-6b989d9e.js";import{u as j}from"./useTranslation-153b6bc3.js";const i={Container:o.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: auto;
  `,HomeIcon:o(m)`
    position: absolute;
    top: 16px;
    left: 16px;
    padding: 2px 4px;
    color: ${({theme:e})=>e.mercury};
  `,QuestionSection:o.section`
    width: 300px;
    height: 264px;
    margin: 100px auto 30px;
    border-radius: 10px;
    background-color: ${({theme:e})=>e.mercury};
    color: ${({theme:e})=>e.mine_shaft};
    position: relative;
    box-shadow: 0px 8px 24px ${({theme:e})=>e.mine_shaft}99;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
  `,Subject:o.p`
    font-weight: bold;
    text-align: center;
    font-size: 13rem;
  `,Count:o.p`
    width: 50%;
    height: 50px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: -25px;
    text-align: center;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 50px;
    border-radius: 25px;
    background-color: ${({theme:e})=>e.mercury};
    box-shadow: 0px 3px 8px ${({theme:e})=>e.black}80;
  `,AnswerSection:o.main`
    color: ${({theme:e})=>e.mercury};
    padding-top: 40px;
  `,Options:o.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 1rem auto 0;
    padding: 0.5rem 0;
    width: 300px;
    border: 1px solid ${({theme:e})=>e.mercury};
    border-radius: 15px;
    position: relative;

    &::before {
      content: ${({$content:e})=>`'${e}'`};
      position: absolute;
      width: 180px;
      text-align: center;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      translate: 0 -50%;
      background: ${({theme:e})=>e.pickled_blue_wood};
    }
  `,Item:o.p`
    font-size: 1.5rem;
    text-align: center;
    padding: 0.75rem;
    margin: 0.5rem;
    width: 60px;
  `},$={Option:o.p`
    font-size: 1.5rem;
    text-align: center;
    padding: 0.75rem;
    margin: 0.5rem;
    width: 60px;
  `};function l(e){const s=h.useRef(),c=b(),d=()=>{s.current.innerText&&c(g(e.current.id))};return t.jsx($.Option,{ref:s,onClick:d,children:e.sound})}l.propTypes={sound:r.string,current:r.shape({sound:r.string,word:r.string,id:r.string})};function v(){const{t:e}=j(),s=f(),c=a(n=>p(n,"current")),d=a(n=>p(n,"count")),u=a(n=>p(n,"total")),x=a(n=>p(n,"opts"));return t.jsx(t.Fragment,{children:s.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsxs(i.Container,{children:[t.jsx(i.HomeIcon,{to:"/",children:t.jsx(w,{})}),t.jsxs(i.QuestionSection,{children:[t.jsx(i.Subject,{children:c.word}),t.jsx(i.Count,{children:`${d}/${u}`})]}),t.jsx(i.AnswerSection,{children:t.jsx(i.Options,{$content:e("chose_answer"),children:x.map(n=>t.jsx(l,{sound:n.sound,current:c},n.id))})})]})})}export{v as default};
