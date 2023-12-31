import s from './Counter.module.css';

type CounterType = {
    value: number
    color: string
}

export const Counter = (props: CounterType) => {
    return <span className={s.Counter}>{props.value}</span>;
}