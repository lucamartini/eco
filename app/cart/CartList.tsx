import useSWR from "swr";
import { Item } from "../providers/cartAtom";

function useCartDetails(cart: Item[]) {
  const ids = cart.map((item) => item.id);
  const { data, error, isLoading } = useSWR(`/products/[${ids.join()}]`, () =>
    Promise.all(
      ids.map((id) =>
        fetch(`https://dummyjson.com/products/${id}`, {}).then((res) =>
          res.json()
        )
      )
    )
  );
  return {
    cartDetails: data,
    isLoading,
    isError: error,
  };
}

export default function CartList(props: { cart: Item[] }) {
  const { cart } = props;
  const { cartDetails, isLoading, isError } = useCartDetails(cart);

  if (isLoading) return <div>...</div>;
  if (isError) return <div>{`error: ${isError}`}</div>;
  else
    return (
      <div
        style={{
          margin: "1rem 0",
          fontFamily: "monospace",
        }}
      >
        <pre>
          <strong>props</strong> = {JSON.stringify(cartDetails, null, 2)}
        </pre>
      </div>
    );
}
