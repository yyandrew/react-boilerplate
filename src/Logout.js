import useSecurity from "./useSecurity";

function Logout() {
  const { logOut } = useSecurity();

  return <button onClick={() => logOut()}>Logout</button>;
}

export default Logout;
