import { useSessionStorage, useLocalStorage } from "@uidotdev/usehooks";

export default function App() {
  const [count, setCount] = useSessionStorage("woot", 0);
  const [count2, setCount2] = useLocalStorage("woot2", 0);
  console.log(`session: ${count}`);
  console.log(`local: ${count2}`);

  return (
    <>
      <section>
      <h1>useLocalStorage</h1>
      <div>
        <button className="link" onClick={() => setCount(0)}>
          Clear Cart
        </button>
        <button
          className="link"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload Window
        </button>
        <button
          className="link"
          onClick={() => {
            window.sessionStorage.clear();
            window.location.reload();
          }}
        >
          Clear Session
        </button>
      </div>
      <button className="primary" onClick={() => setCount(count + 1)}>
        <span></span> Add To Cart
      </button>
      <button className="cart">
        <span></span>{" "}
        <span
          key={count}
          className={`cart-count ${count > 0 ? "animate" : ""}`}
        >
          {count}
        </span>
      </button>
    </section>

    <section>
      <h1>useSessionStorage</h1>
      <div>
        <button className="link" onClick={() => setCount2(0)}>
          Clear Cart
        </button>
        <button
          className="link"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload Window
        </button>
        <button
          className="link"
          onClick={() => {
            window.localStorage.clear();
            window.location.reload();
          }}
        >
          Clear LocalStorage
        </button>
      </div>
      <button className="primary" onClick={() => setCount2(count2 + 1)}>
        <span></span> Add To Cart
      </button>
      <button className="cart">
        <span></span>{" "}
        <span
          key={count2}
          className={`cart-count ${count > 0 ? "animate" : ""}`}
        >
          {count2}
        </span>
      </button>
    </section>
    </>
  );
}