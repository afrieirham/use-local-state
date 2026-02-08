# use-local-state

A robust, typesafe React hook for persisting state in `localStorage`. 

## 1. Features
- **Smart Parsing**: Uses `JSON.parse` to distinguish between strings, numbers, and booleans.
- **BigInt Support**: Explicitly handles BigInt serialization which JSON usually breaks on.
- **Cross-Tab Sync**: Updates all open tabs when state changes in one.
- **SSR Safe**: Prevents hydration errors by checking for the `window` object.

## 2. API Reference

```tsx 
const [state, setState, reset] = useLocalState(initialValue, key);
```

| Param | Type | Description |
| :--- | :--- | :--- |
| `initialValue` | `T` | The default value if nothing is found in storage. |
| `key` | `string` | The unique key used in `localStorage`. |

## 3. Usage Example

```tsx
import { useLocalState } from "./use-local-state";

const App = () => {
  // Boolean persistence (Now fixed!)
  const [isReady, setIsReady] = useLocalState(false, "app-ready");

  // Object persistence
  const [user, setUser] = useLocalState({ name: "Afrie" }, "user-session");

  return (
    <button onClick={() => setIsReady(!isReady)}>
      Status: {isReady ? "Ready" : "Not Ready"}
    </button>
  );
};
```