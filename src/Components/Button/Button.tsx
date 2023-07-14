import React from 'react';

type ButtonType={
    callBack: ()=>void
    children: React.ReactNode
    isDisabled: boolean
}

export const Button=(props:ButtonType)=>{
    return <button disabled={props.isDisabled} onClick={props.callBack}>{props.children}</button>
}