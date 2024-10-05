import{r,u as f,j as a,s as h}from"./app-CYvB9KHX.js";import{s as D,g as N}from"./student-thunk-BuZhxlNT.js";import{S as k,A as E}from"./Snackbar-xoCoLC9d.js";import{B as g}from"./Modal-Dyc9rkP2.js";import{D as F}from"./Drawer-DI0__K6r.js";import{B}from"./Box-BFYYot9b.js";import{T as n}from"./TextField-xpfA3Un_.js";import{F as j,I as v,S as b}from"./Select-D_9xkWuq.js";import{M as C}from"./MenuItem-Bh7QkRnh.js";import{C as I}from"./CircularProgress-CxONhyhd.js";import"./DefaultPropsProvider-BQSM7bde.js";import"./useSlot-CBVqH0gz.js";import"./resolveComponentProps-DNYSFk_-.js";import"./ButtonBase-DMEbOfn-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-BByR1c-r.js";import"./Paper-kPnXvdkl.js";import"./useTheme-BoA35Jdq.js";import"./IconButton-sFaK3y6q.js";import"./useSlotProps-BJLs7v3x.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-DpJbQMo9.js";import"./utils-BStmzzW8.js";import"./index-5DG52Zxz.js";import"./Slide-xMyk6jER.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-BOzDnUd8.js";import"./useId-C914-jBg.js";import"./InputBase-0MIDsGeX.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CHBW4HzE.js";import"./Popover-Cdg5eWZC.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-CSjT4KqF.js";import"./listItemTextClasses-CQaXCe7J.js";function fe(){const[w,m]=r.useState(!1),[d,o]=r.useState(!1),[s,i]=r.useState({}),[e,u]=r.useState({}),[y,p]=r.useState(!1),{departments:S}=f(t=>t.department),{courses:_}=f(t=>t.courses),c=t=>()=>{m(t)};async function T(t){o(!0);const l=await h.dispatch(D({...s,user_type:3}));l.status==200?(await h.dispatch(N()),p(!0),u({}),o(!1)):(o(!1),u(l.response.data.errors))}const x=(t,l)=>{l!=="clickaway"&&(p(!1),m(!1))};return a.jsxs("div",{children:[a.jsx(k,{open:y,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:x,children:a.jsx(E,{onClose:x,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),a.jsx(g,{variant:"contained",onClick:c(!0),children:"Create student"}),a.jsx(F,{anchor:"right",open:w,onClose:c(!1),children:a.jsx(B,{className:"w-[500px] h-full flex",role:"presentation",children:a.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[a.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[a.jsx("div",{className:"text-2xl font-black",children:"Create student"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.user_id),helperText:(e==null?void 0:e.user_id)??"",name:"user_id",type:"text",id:"outlined-basic",label:"Employee ID",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.fname),helperText:(e==null?void 0:e.fname)??"",name:"fname",type:"text",id:"outlined-basic",label:"First Name",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.lname),helperText:(e==null?void 0:e.lname)??"",name:"lname",type:"text",id:"outlined-basic",label:"Last Name",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.email),helperText:(e==null?void 0:e.email)??"",name:"email",type:"email",id:"outlined-basic",label:"Email",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.password),helperText:(e==null?void 0:e.password)??"",name:"password",type:"password",id:"outlined-basic",label:"Password",variant:"outlined"}),a.jsxs(j,{fullWidth:!0,children:[a.jsx(v,{id:"demo-simple-select-label",children:"Department"}),a.jsx(b,{id:"demo-simple-select",name:"department_id",label:"Department",onChange:t=>i({...s,[t.target.name]:t.target.value}),children:S.data.map((t,l)=>a.jsx(C,{value:t.id,children:t.name},l))})]}),a.jsxs(j,{fullWidth:!0,children:[a.jsx(v,{id:"demo-simple-select-label",children:"Course"}),a.jsx(b,{id:"demo-simple-select",name:"course_id",label:"Course",value:s.course_id,onChange:t=>i({...s,[t.target.name]:t.target.value}),children:_.data.map((t,l)=>a.jsx(C,{value:t.id,children:t.name},l))})]}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.dob),helperText:(e==null?void 0:e.dob)??"",name:"dob",type:"date",id:"outlined-basic",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.address),helperText:(e==null?void 0:e.address)??"",name:"address",id:"outlined-basic",label:"Address",variant:"outlined"})]}),a.jsx(g,{onClick:T,disabled:d,variant:"contained",className:" w-full",children:d?a.jsx(I,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{fe as default};