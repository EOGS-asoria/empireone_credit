import{r,j as t,s as a}from"./app-CYvB9KHX.js";import{d as f,g as h}from"./instructor-thunk-BIQA98C4.js";import{S as x,A as j}from"./Snackbar-xoCoLC9d.js";import{B as l,M as y}from"./Modal-Dyc9rkP2.js";import{D as b}from"./Delete-CIO1nDXN.js";import{B as g}from"./Box-BFYYot9b.js";import{T as n}from"./Typography-CCEFdJvR.js";import{C as v}from"./CircularProgress-CxONhyhd.js";import"./user-service--1MaSRHd.js";import"./DefaultPropsProvider-BQSM7bde.js";import"./useSlot-CBVqH0gz.js";import"./resolveComponentProps-DNYSFk_-.js";import"./ButtonBase-DMEbOfn-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-BByR1c-r.js";import"./Paper-kPnXvdkl.js";import"./useTheme-BoA35Jdq.js";import"./IconButton-sFaK3y6q.js";import"./useSlotProps-BJLs7v3x.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-DpJbQMo9.js";import"./utils-BStmzzW8.js";import"./extendSxProp-BOzDnUd8.js";import"./index-CHBW4HzE.js";const w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function W({data:d}){const[c,s]=r.useState(!1),e=()=>s(!1),[m,p]=r.useState(!1),[i,o]=r.useState(!1);async function u(C){o(!0),(await a.dispatch(f(d.id))).status==200&&(await a.dispatch(h()),p(!0)),o(!1)}return t.jsxs("div",{children:[t.jsx(x,{open:m,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:e,children:t.jsx(j,{onClose:e,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Deleted!"})}),t.jsx(l,{size:"small",variant:"contained",color:"error",onClick:()=>s(!0),children:t.jsx(b,{})}),t.jsx(y,{open:c,onClose:e,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t.jsxs(g,{sx:w,children:[t.jsx(n,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Delete Instructor"}),t.jsx(n,{id:"modal-modal-description",sx:{mt:2},children:"Are you sure you want to delete?"}),t.jsx("div",{className:"flex w-full pt-5 items-center justify-end",children:t.jsx(l,{color:"error",onClick:u,disabled:i,variant:"contained",className:" w-full",children:i?t.jsx(v,{size:24,color:"inherit"}):"Delete"})})]})})]})}export{W as default};