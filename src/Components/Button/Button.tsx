import React, {FC} from 'react';

type ButtonType = {
    callBack: () => void
    isDisabled: boolean
    children: React.ReactNode
}

export const Button: FC<ButtonType> = (props) => {
    const {callBack, children, isDisabled, ...restProps} = props

    return <button disabled={isDisabled} onClick={callBack}>{children}</button>
}