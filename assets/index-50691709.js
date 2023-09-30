import{s as o,L as u,g as x,j as t}from"./index-d0ee18ac.js";import{u as f}from"./useTranslation-9e997947.js";const n={Container:o.div`
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
  `,HomeIcon:o(u)`
    display: block;
    position: absolute;
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
  `,QuestionSection:o.section`
    width: 100%;
    height: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  `,Subject:o.p`
    text-align: center;
    font-size: 15rem;
    color: ${({theme:e})=>e.mine_shaft};
  `,InputSection:o.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    position: relative;
  `,Blackboard:o.main`
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
  `,NumberOfQuestion:o.section`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  `,Current:o.p`
    font-size: 2rem;
  `,Total:o.p`
    font-size: 2rem;
  `,Input:o.input`
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    font-size: 5rem;
    text-align: center;
  `};var p={exports:{}},m="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b=m,y=b;function c(){}function l(){}l.resetWarningCache=c;var g=function(){function e(j,T,k,v,S,d){if(d!==y){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}e.isRequired=e;function r(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:l,resetWarningCache:c};return i.PropTypes=i,i};p.exports=g();var w=p.exports;const s=x(w);function h({color:e,size:r="30px"}){const i=e||"none";return t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:i,width:r,height:r,viewBox:"0 0 512 512",children:[t.jsx("path",{fill:"currentColor",d:"M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"}),t.jsx("path",{fill:"currentColor",d:"m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z"})]})}h.propTypes={color:s.string,size:s.string};function $(){const{t:e}=f();return t.jsxs(n.Container,{children:[t.jsx(n.HomeIcon,{to:"/",children:t.jsx(h,{size:"100%"})}),t.jsx(n.QuestionSection,{children:t.jsx(n.Subject,{children:"シ"})}),t.jsx(n.InputSection,{children:t.jsxs(n.Blackboard,{children:[t.jsxs(n.NumberOfQuestion,{children:[t.jsx(n.Current,{children:e("current",{current:1})}),t.jsxs(n.Total,{children:[e("total",{total:46})," "]})]}),t.jsx(n.Input,{type:"text",placeholder:"輸入答案"})]})})]})}export{$ as default};
