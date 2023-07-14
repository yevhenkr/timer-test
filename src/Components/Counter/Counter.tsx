import s from './Counter.module.css'

type Counter={
    value: number
}

export const Counter=(props:Counter)=>{

    return <div className={s.Counter}>{props.value}</div>
}