import { CardContainer } from './styles';

type CardProps = {
  btnStyle?: "fill" | "outline" | "primary",
  value: number,
  text: string,
}

export function Card(props: CardProps) {
  return (
    <CardContainer btnStyle={props.btnStyle}>
      <h3>{props.value}</h3>
      <h4>{props.text}</h4>
    </CardContainer>
  )
}