import{r,j as e,s as i}from"./app-CYvB9KHX.js";import{d as f,g as h}from"./department-thunk-Bm5GXhmt.js";import{S as x,A as j}from"./Snackbar-xoCoLC9d.js";import{B as l,M as y}from"./Modal-Dyc9rkP2.js";import{D as b}from"./Delete-CIO1nDXN.js";import{B as g}from"./Box-BFYYot9b.js";import{T as n}from"./Typography-CCEFdJvR.js";import{C as v}from"./CircularProgress-CxONhyhd.js";import"./DefaultPropsProvider-BQSM7bde.js";import"./useSlot-CBVqH0gz.js";import"./resolveComponentProps-DNYSFk_-.js";import"./ButtonBase-DMEbOfn-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-BByR1c-r.js";import"./Paper-kPnXvdkl.js";import"./useTheme-BoA35Jdq.js";import"./IconButton-sFaK3y6q.js";import"./useSlotProps-BJLs7v3x.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-DpJbQMo9.js";import"./utils-BStmzzW8.js";import"./extendSxProp-BOzDnUd8.js";import"./index-CHBW4HzE.js";const w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function V({data:d}){const[m,s]=r.useState(!1),t=()=>s(!1),[c,p]=r.useState(!1),[a,o]=r.useState(!1);async function u(C){o(!0),(await i.dispatch(f(d.id))).status==200&&(await i.dispatch(h()),p(!0)),o(!1)}return e.jsxs("div",{children:[e.jsx(x,{open:c,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:t,children:e.jsx(j,{onClose:t,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Deleted!"})}),e.jsx(l,{size:"small",variant:"contained",color:"error",onClick:()=>s(!0),children:e.jsx(b,{})}),e.jsx(y,{open:m,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(g,{sx:w,children:[e.jsx(n,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Delete department"}),e.jsx(n,{id:"modal-modal-description",sx:{mt:2},children:"Are you sure you want to delete?"}),e.jsx("div",{className:"flex w-full pt-5 items-center justify-end",children:e.jsx(l,{color:"error",onClick:u,disabled:a,variant:"contained",className:" w-full",children:a?e.jsx(v,{size:24,color:"inherit"}):"Delete"})})]})})]})}export{V as default};