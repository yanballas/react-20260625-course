import { useContext } from "react";
import { UserContext } from "../../context/user.context";

export default function UserBar() {
  const userContext = useContext(UserContext);
  const { user, setUser } = userContext;

  return (
    <>
      {user !== null ? (
        <>
          <span>Hi, {user.name}</span>
          <button onClick={() => setUser(null)}>Log out</button>
        </>
      ) : (
        <button onClick={() => setUser({ name: "Vasya Pupkin" })}>
          Log in
        </button>
      )}
    </>
  );
}
