import{s as n,L as C,r as T,a as y,j as t,i as R,P as d,u as $,J as k,b as a,c as j,C as _,W as H,n as A,e as L,f as O,h as f,o as D,k as E,g as N,H as M}from"./index-2ee6cce9.js";const m={Container:n.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: auto;
  `,HomeIcon:n(C)`
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
  `},P={Option:n.p`
    font-size: 1.5rem;
    text-align: center;
    padding: 0.75rem;
    margin: 0.5rem;
    width: 60px;
  `};function z(e){const s=T.useRef(),l=y(),c=()=>{const i=s.current.innerText;i&&l(R({user:i,truly:e.current.sound,id:e.current.id}))};return t.jsx(P.Option,{ref:s,onClick:c,children:e.sound})}z.propTypes={sound:d.string,current:d.shape({sound:d.string,word:d.string,id:d.string})};const g={Container:n.main`
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
  `};function v(e){const{t:s}=$(),l=y(),c=k(),i=a(u=>j(u,"answer")),x="100%",h=()=>{l(A(e.id)),l(L())};return t.jsxs(g.Container,{children:[t.jsxs(g.ResultSection,{children:[t.jsx(g.Icon,{children:i.result?t.jsx(_,{color:c[i.color],size:x}):t.jsx(H,{color:c[i.color],size:x})}),t.jsx(g.ResultText,{$color:c[i.color],children:s(`answer.${i.text}`)})]}),!i.result&&t.jsxs(g.Comparison,{children:[t.jsx(g.Text,{$color:c.red,children:s("comparison.user",{u:i.user})}),t.jsx(g.Text,{$color:c.green,children:s("comparison.truly",{t:i.truly})})]}),t.jsx(g.ToNextSubject,{onClick:h,children:s("next_subject.mobile")})]})}v.propTypes={id:d.string};const p={Header:n.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
  `,Title:n.p`
    color: ${({theme:e})=>e.mercury};
    font-size: 3rem;
  `,FailingDisplay:n.section`
    width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${({theme:e})=>`${e.mine_shaft}EE`};
    padding: 4px 0;
    box-shadow: 0px 8px 24px ${({theme:e})=>e.mine_shaft}99;
    user-select: none;
  `,Row:n.div`
    display: flex;
    width: 100%;
    padding: 8px 0;
  `,Item:n.p`
    width: 33%;
    text-align: center;
    font-size: 1.25rem;
    color: ${({$color:e,theme:s})=>e||s.mercury};

    &:nth-child(1) {
      font-size: 1.75rem;
    }
  `,LinkGroup:n.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    height: 35%;
  `,link:n(C)`
    text-decoration: none;
    color: ${({theme:e})=>e.mercury};
    border: 1px solid ${({theme:e})=>e.mercury};
    border-radius: 10px;
    padding: 15px;
    margin: 15px;
    font-size: 24px;
  `};function B(){const{category:e}=O(),{t:s}=$(),{red:l,green:c}=k(),i=a(r=>j(r,"log")),x=a(r=>j(r,"finishTitle")),h=a(r=>f(r,"data")),u=i.length,b=u&&i.map(r=>{const o=h.find(I=>I.id===r.id);return{word:o.word,sound:o.sound,fail:r.user,id:r.id}});return t.jsxs(t.Fragment,{children:[t.jsx(p.Header,{children:t.jsx(p.Title,{children:s(`finish.${x}`)})}),u?t.jsx(p.FailingDisplay,{children:b.map(r=>t.jsxs(p.Row,{children:[t.jsx(p.Item,{children:r.word}),t.jsx(p.Item,{$color:c,children:r.sound}),t.jsx(p.Item,{$color:l,children:r.fail})]},r.id))}):null,t.jsxs(p.LinkGroup,{children:[t.jsx(p.link,{to:"/",children:s("back_to_home")}),t.jsx(p.link,{to:`/${e}`,children:s("retry")})]})]})}const w={IconSection:n.button`
    position: absolute;
    background-color: transparent;
    border: none;
    width: ${({$size:e})=>e};
    height: ${({$size:e})=>e};
    ${({$position:e})=>e}
  `,Clickable:n.div`
    position: absolute;
    width: 100%;
    height: 100%;
  `,ShowFailsNumber:n.p`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    background-color: ${({theme:e})=>e.red};
    border-radius: 50%;
    color: ${({theme:e})=>e.mercury};
    translate: -40% 35%;
    text-align: center;
    line-height: 20px;
  `},S={size:"35px",position:{top:16,right:16}};function F(e){const{mercury:s}=k(),l=y(),c=a(u=>j(u,"log")),i=!!c.length,{size:x=S.size,position:h=S.position}=e;return i?t.jsxs(w.IconSection,{$size:x,$position:h,children:[t.jsx(w.Clickable,{onClick:()=>l(D())}),t.jsx(w.ShowFailsNumber,{children:c.length}),t.jsx(E,{color:s})]}):null}F.propTypes={size:d.string,position:d.shape({top:d.number,left:d.number,right:d.number,bottom:d.number})};function J(){const{t:e}=$(),s=N(),l=a(o=>f(o,"current")),c=a(o=>f(o,"count")),i=a(o=>f(o,"total")),x=a(o=>f(o,"opts")),h=a(o=>f(o,"list")),u=a(o=>j(o,"shouldFinish")),b=a(o=>j(o,"showResult")),r=T.useMemo(()=>u?!1:!!h.length,[u,h.length]);return t.jsx(t.Fragment,{children:s.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsx(m.Container,{children:r?t.jsxs(t.Fragment,{children:[t.jsx(m.HomeIcon,{to:"/",children:t.jsx(M,{})}),t.jsx(F,{}),t.jsxs(m.QuestionSection,{children:[t.jsx(m.Subject,{children:l.word}),t.jsx(m.Count,{children:`${c}/${i}`})]}),t.jsx(m.AnswerSection,{children:t.jsx(m.Options,{$content:e(b?"result":"chose_answer"),$result:b,children:b?t.jsx(v,{id:l.id}):t.jsx(t.Fragment,{children:x.map(o=>t.jsx(z,{sound:o.sound,current:l},o.id))})})})]}):t.jsx(B,{})})})}export{J as default};
