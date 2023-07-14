import s from "./Counter.module.css"
type CounterType={
    value:number
}

export const Counter=(props:CounterType)=>{
    return <span className={s.Counter__Value}>{props.value}</span>
}