type CounterType = {
    value: number
    color: string
}

export const Counter = (props: CounterType) => {
    return <span style={{ color: props.color }}>{props.value}</span>;
}