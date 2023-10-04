import{s as o,L as w,r as j,j as t,c as b,J as $,a,e as m,u as y,b as d}from"./index-7402b431.js";import{u as S,P as p,C,W as k,H as v}from"./Wrong-0a72b15a.js";import{u as g}from"./useTranslation-323a519d.js";const i={Container:o.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: auto;
  `,HomeIcon:o(w)`
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
      width: ${({$result:e})=>e?"45px":"180px"};
      text-align: center;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      translate: 0 -50%;
      background: ${({theme:e})=>e.pickled_blue_wood};
    }
  `},R={Option:o.p`
    font-size: 1.5rem;
    text-align: center;
    padding: 0.75rem;
    margin: 0.5rem;
    width: 60px;
  `};function f(e){const r=j.useRef(),s=S(),c=()=>{const{sound:l}=e.current,x=r.current.innerText;x&&s(b(x===l))};return t.jsx(R.Option,{ref:r,onClick:c,children:e.sound})}f.propTypes={sound:p.string,current:p.shape({sound:p.string,word:p.string,id:p.string})};const h={Container:o.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 298px;
    height: 128px;
  `,IconSection:o.section`
    width: 45px;
    height: 45px;
    margin-right: 10px;
  `,ResultText:o.p`
    font-size: 2rem;
    color: ${({$color:e})=>e};
    letter-spacing: 2px;
  `};function z(){const{t:e}=g(),r=$(),s=a(l=>m(l,"answer")),c="100%";return t.jsxs(h.Container,{children:[t.jsx(h.IconSection,{children:s.result?t.jsx(C,{color:r[s.color],size:c}):t.jsx(k,{color:r[s.color],size:c})}),t.jsx(h.ResultText,{$color:r[s.color],children:e(`answer.${s.text}`)})]})}function _(){const{t:e}=g(),r=y(),s=a(n=>d(n,"current")),c=a(n=>d(n,"count")),l=a(n=>d(n,"total")),x=a(n=>d(n,"opts")),u=a(n=>m(n,"showResult"));return t.jsx(t.Fragment,{children:r.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsxs(i.Container,{children:[t.jsx(i.HomeIcon,{to:"/",children:t.jsx(v,{})}),t.jsxs(i.QuestionSection,{children:[t.jsx(i.Subject,{children:s.word}),t.jsx(i.Count,{children:`${c}/${l}`})]}),t.jsx(i.AnswerSection,{children:t.jsx(i.Options,{$content:e(u?"result":"chose_answer"),$result:u,children:u?t.jsx(z,{}):t.jsx(t.Fragment,{children:x.map(n=>t.jsx(f,{sound:n.sound,current:s},n.id))})})})]})})}export{_ as default};
