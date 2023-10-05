import{s as n,L as w,r as y,j as t,f as $,J as S,u as d,a as m,n as C,c as T,b as v,e as h}from"./index-e78b85b7.js";import{u as g,P as x,C as R,W as k,H as z}from"./Wrong-4efe45c9.js";import{u as f}from"./useTranslation-9448f767.js";const p={Container:n.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: auto;
  `,HomeIcon:n(w)`
    position: absolute;
    top: 16px;
    left: 16px;
    padding: 2px 4px;
    color: ${({theme:e})=>e.mercury};
  `,QuestionSection:n.section`
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
  `,Subject:n.p`
    font-weight: bold;
    text-align: center;
    font-size: 13rem;
  `,Count:n.p`
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
  `,AnswerSection:n.main`
    color: ${({theme:e})=>e.mercury};
    padding-top: 40px;
  `,Options:n.section`
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
      width: ${({$result:e})=>e?"45px":"180px"};
      text-align: center;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      translate: 0 -50%;
      background: ${({theme:e})=>e.pickled_blue_wood};
    }
  `},A={Option:n.p`
    font-size: 1.5rem;
    text-align: center;
    padding: 0.75rem;
    margin: 0.5rem;
    width: 60px;
  `};function j(e){const i=y.useRef(),c=g(),r=()=>{const{sound:s}=e.current,a=i.current.innerText;a&&c($({user:a,truly:s}))};return t.jsx(A.Option,{ref:i,onClick:r,children:e.sound})}j.propTypes={sound:x.string,current:x.shape({sound:x.string,word:x.string,id:x.string})};const l={Container:n.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 298px;
    height: 128px;
    padding-bottom: 30px;
    position: relative;
    user-select: none;
  `,ResultSection:n.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  `,Icon:n.section`
    width: 35px;
    height: 35px;
    margin-right: 10px;
  `,ResultText:n.p`
    font-size: 1.5rem;
    color: ${({$color:e})=>e};
    letter-spacing: 2px;
  `,Comparison:n.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    padding: 8px 0;
  `,Text:n.p`
    color: ${({$color:e})=>`${e}CA`};
  `,ToNextSubject:n.p`
    font-size: 1.05rem;
    letter-spacing: 1px;
    position: absolute;
    bottom: -5%;
    text-decoration: underline;
    text-align: center;
    width: 100%;
    padding: 10px;
  `};function b(e){const{t:i}=f(),c=g(),r=S(),s=d(o=>m(o,"answer")),a="100%",u=()=>{c(C(e.id)),c(T())};return t.jsxs(l.Container,{children:[t.jsxs(l.ResultSection,{children:[t.jsx(l.Icon,{children:s.result?t.jsx(R,{color:r[s.color],size:a}):t.jsx(k,{color:r[s.color],size:a})}),t.jsx(l.ResultText,{$color:r[s.color],children:i(`answer.${s.text}`)})]}),!s.result&&t.jsxs(l.Comparison,{children:[t.jsx(l.Text,{$color:r.red,children:i("comparison.user",{u:s.user})}),t.jsx(l.Text,{$color:r.green,children:i("comparison.truly",{t:s.truly})})]}),t.jsx(l.ToNextSubject,{onClick:u,children:i("next_subject.mobile")})]})}b.propTypes={id:x.string};function H(){const{t:e}=f(),i=v(),c=d(o=>h(o,"current")),r=d(o=>h(o,"count")),s=d(o=>h(o,"total")),a=d(o=>h(o,"opts")),u=d(o=>m(o,"showResult"));return t.jsx(t.Fragment,{children:i.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsxs(p.Container,{children:[t.jsx(p.HomeIcon,{to:"/",children:t.jsx(z,{})}),t.jsxs(p.QuestionSection,{children:[t.jsx(p.Subject,{children:c.word}),t.jsx(p.Count,{children:`${r}/${s}`})]}),t.jsx(p.AnswerSection,{children:t.jsx(p.Options,{$content:e(u?"result":"chose_answer"),$result:u,children:u?t.jsx(b,{id:c.id}):t.jsx(t.Fragment,{children:a.map(o=>t.jsx(j,{sound:o.sound,current:c},o.id))})})})]})})}export{H as default};
