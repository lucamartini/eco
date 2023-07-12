export default function Detail(props: { params: { id: string } }) {
  return <div>{props.params.id}</div>;
}
