import { useState } from "react";
import { Button } from "./components/Button";


export const App = () => {

  const [total, setTotal] = useState(0)

  function increment() {
    setTotal((total) => total + 1);
  }

  return (
    <div><p>Total: {total}</p><Button style={{ fontSize: "24px" }} onClick={increment}>Incrementar</Button></div>
  )
}
