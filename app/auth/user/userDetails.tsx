import useSWR from "swr";

function useUser(token: string, id: string) {
  const { data, error, isLoading } = useSWR(`/auth/users/${id}`, () =>
    fetch(`https://dummyjson.com/auth/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
  );
  return {
    user: data,
    isLoading,
    isError: error,
  };
}

export default function UserDetail({
  authentication,
}: {
  authentication: {
    token: string;
    id: string;
  };
}) {
  const { token, id } = authentication;
  const { user, isLoading, isError } = useUser(token, id);

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
          <strong>props</strong> = {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    );
}
