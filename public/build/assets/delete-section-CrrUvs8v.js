import{r,j as e,s as a}from"./app-CcFxKgAD.js";import{d as f,g as h}from"./enrollment-thunk-baIw6UjN.js";import{S as x,A as j}from"./Snackbar-CcrDZD18.js";import{B as l}from"./Button-DebYElXm.js";import{D as y}from"./Delete-BnQhY4aU.js";import{M as b}from"./Modal-CSdbskgH.js";import{B as g}from"./Box-cMi0Rkwc.js";import{T as n}from"./Typography-DHBjKxG2.js";import{C as v}from"./CircularProgress-5T7pbAIz.js";import"./DefaultPropsProvider-CP8Dzdx4.js";import"./useSlot-BkWWeJSN.js";import"./resolveComponentProps-DWerkNmX.js";import"./ButtonBase-DSh1E41x.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-Hk2aX3dH.js";import"./Paper-CNqsZyLv.js";import"./useTheme-BAygJoIP.js";import"./IconButton-BiEa_APH.js";import"./useSlotProps-nnbFR5-n.js";import"./ownerWindow-CO8Ksk3k.js";import"./Grow-R3vvtVcN.js";import"./utils-B0SWmCla.js";import"./extendSxProp-BQ60it6R.js";import"./index-C7QlkSNc.js";const w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function W({data:d}){const[m,s]=r.useState(!1),t=()=>s(!1),[c,p]=r.useState(!1),[i,o]=r.useState(!1);async function u(C){o(!0),(await a.dispatch(f(d.id))).status==200&&(await a.dispatch(h()),p(!0)),o(!1)}return e.jsxs("div",{children:[e.jsx(x,{open:c,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:t,children:e.jsx(j,{onClose:t,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Deleted!"})}),e.jsx(l,{size:"small",variant:"contained",color:"error",onClick:()=>s(!0),children:e.jsx(y,{})}),e.jsx(b,{open:m,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(g,{sx:w,children:[e.jsx(n,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Delete enrollments"}),e.jsx(n,{id:"modal-modal-description",sx:{mt:2},children:"Are you sure you want to delete?"}),e.jsx("div",{className:"flex w-full pt-5 items-center justify-end",children:e.jsx(l,{color:"error",onClick:u,disabled:i,variant:"contained",className:" w-full",children:i?e.jsx(v,{size:24,color:"inherit"}):"Delete"})})]})})]})}export{W as default};