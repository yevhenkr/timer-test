import s from './Button.module.css';


type ButtonType = {
    name: string
    callBack: ()=>void
    isDisabled: boolean
}

export const Button = (props: ButtonType) => {
    return <button className={s.Button}
        onClick={props.callBack} disabled={props.isDisabled}>{props.name}</button>
}