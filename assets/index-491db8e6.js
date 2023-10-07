import{s as n,L as v,u as p,a as m,r as g,j as t,c as C,n as I,J as _,b as R,d as F,e as L,f as y,g as P}from"./index-4c4eca88.js";import{u as z,P as D,H}from"./Wrong-8e50cbcd.js";import{u as j}from"./useTranslation-de8c6b15.js";const d={Container:n.div`
    width: 1000px;
    height: 95%;
    margin: auto;
    translate: 0 2.5%;
    background: ${({theme:e})=>e.white+"33"};
    border-radius: 20px;
    box-shadow: 0 4px 30px ${({theme:e})=>e.black+"20"};
    backdrop-filter: blur(1.8px);
    -webkit-backdrop-filter: blur(1.8px);
    border: 1px solid ${({theme:e})=>e.white+"aa"};
    position: relative;
    user-select: none;
    display: flex;
    flex-direction: column;
  `,HomeIcon:n(v)`
    display: block;
    position: absolute;
    z-index: 1;
    top: 40px;
    left: -40px;
    width: 80px;
    height: 80px;
    padding: 10px;
    background: ${({theme:e})=>e.white+"33"};
    box-shadow: 2px 4px 40px ${({theme:e})=>e.black+"22"};
    border: 1px solid ${({theme:e})=>e.white+"aa"};
    border-radius: 50%;
    text-decoration: none;
    color: ${({theme:e})=>e.mine_shaft};
    cursor: pointer;

    &:hover {
      scale: 1.05;
    }
  `,QuestionSection:n.section`
    width: 100%;
    height: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  `,Subject:n.p`
    text-align: center;
    font-size: 15rem;
    color: ${({theme:e})=>e.mine_shaft};
  `,InputSection:n.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    position: relative;
  `,Blackboard:n.main`
    @font-face {
      font-family: Chalk;
      src: url('./font/Chalk.ttf');
    }

    position: absolute;
    width: 60%;
    height: 80%;
    background-color: ${({theme:e})=>e.dark_green};
    border-width: 7px 11px;
    border-style: solid;
    border-color: ${({theme:e})=>e.brown};
    border-radius: 7px;
    box-shadow: ${({theme:e})=>e.mine_shaft} 2px 2px 6px 0px inset,
      ${({theme:e})=>e.mine_shaft} -2px -2px 6px 1px inset;

    & > * {
      color: ${({theme:e})=>e.mercury};
      font-family: Chalk;
    }
  `,NumberOfQuestion:n.section`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  `,Current:n.p`
    font-size: 2rem;
  `,Total:n.p`
    font-size: 2rem;
  `},x={Container:n.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  `,ResultSection:n.section`
    display: flex;
    align-items: center;
    color: ${({$color:e})=>e};
  `,PreFix:n.p`
    font-size: 7rem;
  `,Text:n.p`
    display: flex;
    font-size: 3rem;
    letter-spacing: 10px;
  `,Comparison:n.section`
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    padding-bottom: 30px;
  `,Txt:n.p`
    font-size: 2rem;
  `,PressToNext:n.p`
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 10px;
    text-align: center;
    font-size: 1.5rem;
    font-family: BIZUDPMincho, sans-serif;
  `};function S({id:e}){const{t:r}=j(),u=z(),o=p(l=>m(l,"answer")),i={key:"keydown",func:l=>{if(l.code==="Space"){u(C()),u(I(e));return}}};return g.useEffect(()=>(document.addEventListener(i.key,i.func),()=>document.removeEventListener(i.key,i.func)),[i.func,i.key]),t.jsxs(x.Container,{children:[t.jsxs(x.ResultSection,{$color:o.color,children:[t.jsx(x.PreFix,{children:o.result?"O":"X"}),t.jsx(x.Text,{children:r(`answer.${o.text}`)})]}),!o.result&&t.jsxs(x.Comparison,{children:[t.jsx(x.Txt,{children:r("comparison.user",{u:o.user})}),t.jsx(x.Txt,{children:r("comparison.truly",{t:o.truly})})]}),t.jsx(x.PressToNext,{children:r("next_subject.web")})]})}S.propTypes={id:D.string};const B={Input:n.input`
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    font-size: 5rem;
    text-align: center;
  `};function E(){const{t:e}=j(),[r,u]=g.useState(""),o=i=>{const l=i.target.value;u(l.replace(/[^a-z]/,""))};return t.jsx(B.Input,{type:"text",placeholder:e("input_answer"),maxLength:3,onChange:o,value:r,autoFocus:!0})}const c={Header:n.header`
    display: flex;
    justify-content: center;
    padding: 50px;
  `,Title:n.p`
    color: ${({theme:e})=>e.mine_shaft};
    font-size: 64px;
    font-weight: bold;
  `,FailingDisplay:n.section`
    @font-face {
      font-family: Chalk;
      src: url('./font/Chalk.ttf');
    }

    width: 60%;
    margin: auto;
    background-color: ${({theme:e})=>e.dark_green};
    border-width: 7px 11px;
    border-style: solid;
    border-color: ${({theme:e})=>e.brown};
    border-radius: 7px;
    box-shadow: ${({theme:e})=>e.mine_shaft} 2px 2px 6px 0px inset,
      ${({theme:e})=>e.mine_shaft} -2px -2px 6px 1px inset;

    & > * {
      color: ${({theme:e})=>e.mercury};
      font-family: Chalk;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4px 0;
    user-select: none;
  `,Row:n.div`
    display: flex;
    width: 100%;
    padding: 8px 0;
  `,Item:n.p`
    width: 33%;
    text-align: center;
    font-size: 36px;
    color: ${({$color:e,theme:r})=>e||r.mercury};

    &:nth-child(1) {
      font-size: 48px;
    }
  `,LinkGroup:n.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35%;
    margin-top: ${({$marginTop:e})=>e};
  `,link:n(v)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 90px;
    height: 215px;
    margin: 0 25px;
    text-decoration: none;
    writing-mode: vertical-lr;
    color: ${({theme:e})=>e.mine_shaft};
    user-select: none;
    text-align: center;
    transition: translate 0.2s ease-in-out;

    &:nth-child(1) {
      font-size: 36px;
    }

    &:nth-child(2) {
      font-size: 28px;
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
  `};function N(){const{t:e}=j(),{red:r,green:u}=_(),{category:o}=R(),i=p(a=>m(a,"log")),l=p(a=>m(a,"finishTitle")),[h,b]=g.useMemo(()=>{const a=F[o];return[!!i.length,i.map(f=>({...a.find(w=>w.id===f.id),user:f.user}))]},[i,o]);return t.jsxs(t.Fragment,{children:[t.jsx(c.Header,{children:t.jsx(c.Title,{children:e(`finish.${l}`)})}),h?t.jsx(c.FailingDisplay,{children:b.map(a=>t.jsxs(c.Row,{children:[t.jsx(c.Item,{children:a.word}),t.jsx(c.Item,{$color:u,children:a.sound}),t.jsx(c.Item,{$color:r,children:a.user})]},a.id))}):null,t.jsxs(c.LinkGroup,{$marginTop:h?"auto":"130px",children:[t.jsx(c.link,{to:"/",children:e("back_to_home")}),t.jsx(c.link,{to:`/${o}`,children:e("retry")})]})]})}function O(){const{t:e}=j(),r=L(),u=z(),o=p(s=>y(s,"current")),i=p(s=>y(s,"total")),l=p(s=>y(s,"count")),h=p(s=>y(s,"list")),b=p(s=>m(s,"log")),a=p(s=>m(s,"showResult")),f=g.useRef(),k=s=>{s.preventDefault();const $=f.current[0].value;if($){const T={user:$,truly:o.sound,id:o.id};u(P(T))}else return},w=g.useMemo(()=>b.length===5?!0:!h.length,[b,h]);return t.jsx(t.Fragment,{children:r.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsx(d.Container,{children:w?t.jsx(N,{}):t.jsxs(t.Fragment,{children:[t.jsx(d.HomeIcon,{to:"/",children:t.jsx(H,{size:"100%"})}),t.jsx(d.QuestionSection,{children:t.jsx(d.Subject,{children:o.word})}),t.jsx(d.InputSection,{onSubmit:k,ref:f,children:t.jsxs(d.Blackboard,{children:[t.jsxs(d.NumberOfQuestion,{children:[t.jsx(d.Current,{children:e("current",{current:l})}),t.jsxs(d.Total,{children:[e("total",{total:i})," "]})]}),a?t.jsx(S,{id:o.id}):t.jsx(E,{})]})})]})})})}export{O as default};
