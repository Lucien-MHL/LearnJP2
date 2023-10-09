import{s as n,u as w,a as v,b as p,c as h,r as f,j as t,e as R,n as F,P as L,L as P,J as z,f as D,d as H,g as B,h as j,i as E,H as M,k as N}from"./index-2323d57b.js";import{C as Q}from"./index-8daef969.js";const c={Container:n.div`
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
  `,HomeIcon:n.button`
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
  `,ChartIcon:n.div`
    width: 80px;
    height: 80px;
    position: absolute;
    top: 150px;
    left: -40px;
    background: ${({theme:e})=>e.white+"33"};
    box-shadow: 2px 4px 40px ${({theme:e})=>e.black+"22"};
    border: 1px solid ${({theme:e})=>e.white+"aa"};
    border-radius: 50%;
    z-index: 1;

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
  `},u={Container:n.main`
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
  `};function C({id:e}){const{t:a}=w(),x=v(),i=p(d=>h(d,"answer")),o={key:"keydown",func:d=>{if(d.code==="Space"){x(R()),x(F(e));return}}};return f.useEffect(()=>(document.addEventListener(o.key,o.func),()=>document.removeEventListener(o.key,o.func)),[o.func,o.key]),t.jsxs(u.Container,{children:[t.jsxs(u.ResultSection,{$color:i.color,children:[t.jsx(u.PreFix,{children:i.result?"O":"X"}),t.jsx(u.Text,{children:a(`answer.${i.text}`)})]}),!i.result&&t.jsxs(u.Comparison,{children:[t.jsx(u.Txt,{children:a("comparison.user",{u:i.user})}),t.jsx(u.Txt,{children:a("comparison.truly",{t:i.truly})})]}),t.jsx(u.PressToNext,{children:a("next_subject.web")})]})}C.propTypes={id:L.string};const A={Input:n.input`
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    font-size: 5rem;
    text-align: center;
  `};function O(){const{t:e}=w(),[a,x]=f.useState(""),i=o=>{const d=o.target.value;x(d.replace(/[^a-z]/,""))};return t.jsx(A.Input,{type:"text",placeholder:e("input_answer"),maxLength:3,onChange:i,value:a,autoFocus:!0})}const l={Header:n.header`
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
    color: ${({$color:e,theme:a})=>e||a.mercury};

    &:nth-child(1) {
      font-size: 48px;
    }
  `,LinkGroup:n.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35%;
    margin-top: ${({$marginTop:e})=>e};
  `,link:n(P)`
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
  `};function G(){const{t:e}=w(),{red:a,green:x}=z(),{category:i}=D(),o=p(r=>h(r,"log")),d=p(r=>h(r,"finishTitle")),[m,g]=f.useMemo(()=>{const r=H[i];return[!!o.length,o.map(b=>({...r.find(k=>k.id===b.id),user:b.user}))]},[o,i]);return t.jsxs(t.Fragment,{children:[t.jsx(l.Header,{children:t.jsx(l.Title,{children:e(`finish.${d}`)})}),m?t.jsx(l.FailingDisplay,{children:g.map(r=>t.jsxs(l.Row,{children:[t.jsx(l.Item,{children:r.word}),t.jsx(l.Item,{$color:x,children:r.sound}),t.jsx(l.Item,{$color:a,children:r.user})]},r.id))}):null,t.jsxs(l.LinkGroup,{$marginTop:m?"auto":"130px",children:[t.jsx(l.link,{to:"/",children:e("back_to_home")}),t.jsx(l.link,{to:`/${i}`,children:e("retry")})]})]})}function U(){const{t:e}=w(),{mine_shaft:a}=z(),x=B(),i=v(),o=p(s=>j(s,"current")),d=p(s=>j(s,"total")),m=p(s=>j(s,"count")),g=p(s=>j(s,"list")),r=p(s=>h(s,"log")),b=p(s=>h(s,"showResult")),y=f.useRef(),k=s=>{s.preventDefault();const $=y.current[0].value;if($){const _={user:$,truly:o.sound,id:o.id};i(N(_))}else return},S=f.useMemo(()=>r.length===5?!0:!g.length,[r,g]),I=E(),T=()=>{if(window.confirm(e("data_wont_save")))I("/");else return};return t.jsx(t.Fragment,{children:x.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsx(c.Container,{children:S?t.jsx(G,{}):t.jsxs(t.Fragment,{children:[t.jsx(c.HomeIcon,{onClick:T,children:t.jsx(M,{size:"100%"})}),t.jsx(c.ChartIcon,{children:t.jsx(Q,{color:a,size:"60px",position:{top:10,left:10}})}),t.jsx(c.QuestionSection,{children:t.jsx(c.Subject,{children:o.word})}),t.jsx(c.InputSection,{onSubmit:k,ref:y,children:t.jsxs(c.Blackboard,{children:[t.jsxs(c.NumberOfQuestion,{children:[t.jsx(c.Current,{children:e("current",{current:m})}),t.jsxs(c.Total,{children:[e("total",{total:d})," "]})]}),b?t.jsx(C,{id:o.id}):t.jsx(O,{})]})})]})})})}export{U as default};
