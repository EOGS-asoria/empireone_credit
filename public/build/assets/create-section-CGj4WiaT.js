import{r as o,c as I,u as g,j as t,s as S}from"./app-3jIamv-p.js";import{s as N,g as D}from"./subject-thunk-HBPewdrT.js";import{a as A}from"./academic-year-By9atIYz.js";import{S as B,A as F}from"./Snackbar-p25xzclL.js";import{B as v}from"./Modal-Dskmuu2J.js";import{D as T}from"./Drawer-Dyx424Zs.js";import{B as W}from"./Box-wCWSmHga.js";import{T as C}from"./TextField-B_NI4FUE.js";import{F as n,I as m,S as c}from"./Select-DuyLuBAu.js";import{M as i}from"./MenuItem-D4knwqTK.js";import{C as E}from"./CircularProgress-D4XMWrNT.js";import"./DefaultPropsProvider-CultUzqc.js";import"./useSlot-BKIjwuaw.js";import"./resolveComponentProps-Dg1vdYOb.js";import"./ButtonBase-BA2Tf-Fk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-B9j9XIUT.js";import"./Paper-DjWi0n4F.js";import"./useTheme-DnrImtw5.js";import"./IconButton-DlAJrdyf.js";import"./useSlotProps-TVY9aIfw.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-B-3SlRXu.js";import"./utils-CTa3tEFy.js";import"./index-NOo54Jk5.js";import"./Slide-CW16OOjC.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-CsOHeTh9.js";import"./useId-ZX7LdyS1.js";import"./InputBase-C0hKGzX-.js";import"./isHostComponent-DVu5iVWx.js";import"./index-Ckn9eBTd.js";import"./Popover-Oj-A0Q0r.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-D4rmjPZw.js";import"./listItemTextClasses-B-cBZ9o0.js";function be(){const[y,u]=o.useState(!1),[p,d]=o.useState(!1),[s,l]=o.useState({semester:"1st Semester",academic_year:I()}),[a,h]=o.useState({}),[_,x]=o.useState(!1),{sections:w}=g(e=>e.sections),{instructors:f}=g(e=>e.instructors),j=e=>()=>{u(e)};async function k(e){d(!0);const r=await S.dispatch(N(s));r.status==200?(await S.dispatch(D()),x(!0),h({}),d(!1)):(d(!1),h(r.response.data.errors))}const b=(e,r)=>{r!=="clickaway"&&(x(!1),u(!1))};return console.log("instructors",f),t.jsxs("div",{children:[t.jsx(B,{open:_,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:b,children:t.jsx(F,{onClose:b,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),t.jsx(v,{variant:"contained",onClick:j(!0),children:"Create Subject"}),t.jsx(T,{anchor:"right",open:y,onClose:j(!1),children:t.jsx(W,{className:"w-[500px] h-full flex",role:"presentation",children:t.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[t.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[t.jsx("div",{className:"text-2xl font-black",children:"Create subject"}),t.jsx(C,{onChange:e=>l({...s,[e.target.name]:e.target.value}),error:!!(a!=null&&a.name),helperText:(a==null?void 0:a.name)??"",name:"name",type:"text",id:"outlined-basic",label:"Name of Subject",variant:"outlined"}),t.jsx(C,{onChange:e=>l({...s,[e.target.name]:e.target.value}),error:!!(a!=null&&a.code),helperText:(a==null?void 0:a.code)??"",name:"code",type:"text",id:"outlined-basic",label:"Subject Code",variant:"outlined"}),t.jsxs(n,{fullWidth:!0,children:[t.jsx(m,{id:"demo-simple-select-label",children:"Academic Year"}),t.jsx(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:(s==null?void 0:s.academic_year)??"",name:"academic_year",label:"Academic Year",onChange:e=>l({...s,[e.target.name]:e.target.value}),children:A().map((e,r)=>t.jsx(i,{value:e,children:e},r))})]}),t.jsxs(n,{fullWidth:!0,children:[t.jsx(m,{id:"demo-simple-select-label",children:"Semester"}),t.jsxs(c,{id:"demo-simple-select",name:"semester",label:"Semester",value:(s==null?void 0:s.semester)??"",onChange:e=>l({...s,[e.target.name]:e.target.value}),children:[t.jsx(i,{value:"1st Semester",children:"1st Semester"}),t.jsx(i,{value:"2nd Semester",children:"2nd Semester"}),t.jsx(i,{value:"Summer",children:"Summer"})]})]}),t.jsxs(n,{fullWidth:!0,children:[t.jsx(m,{id:"demo-simple-select-label",children:"Instructor"}),t.jsx(c,{id:"demo-simple-select",name:"instructor_id",label:"Instructor",onChange:e=>l({...s,[e.target.name]:e.target.value}),children:f.data.map((e,r)=>t.jsxs(i,{value:e.user_id,children:[e.fname," ",e.lname]}))})]}),t.jsxs(n,{fullWidth:!0,children:[t.jsx(m,{id:"demo-simple-select-label",children:"Section"}),t.jsx(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"section_id",label:"Section",onChange:e=>l({...s,[e.target.name]:e.target.value}),children:w.data.map((e,r)=>t.jsx(i,{value:e.id,children:e.name},r))})]})]}),t.jsx(v,{onClick:k,disabled:p,variant:"contained",className:" w-full",children:p?t.jsx(E,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{be as default};
