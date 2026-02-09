# use-local-state

A robust, typesafe React hook for persisting state in `localStorage`. 

## 1. Features
- **Smart Parsing**: Uses `JSON.parse` to distinguish between strings, numbers, and booleans.
- **BigInt Support**: Explicitly handles BigInt serialization which JSON usually breaks on.
- **Cross-Tab Sync**: Updates all open tabs when state changes in one.
- **Static-Friendly**: Optimized for client-side persistence in SSG/SSR environments.

## 2. API Reference

```tsx 
const [state, setState, reset] = useLocalState(initialValue, key);
```

| Param | Type | Description |
| :--- | :--- | :--- |
| `initialValue` | `T` | The default value used if nothing is found in storage. |
| `key` | `string` | The unique key used in `localStorage`. |

## 3. Usage Example

```tsx
import { useLocalState } from "./use-local-state";

const App = () => {
  // Boolean persistence
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

## 4. Handling SSR / Static Hydration

In SSR or Static environments (like Next.js or Vite-Prerender), the server does not have access to your browser's `localStorage`. This creates a mismatch between the initial HTML and the persisted state.

To prevent a "hydration flicker," use the **Mount Guard** pattern. Combine this with `@formkit/auto-animate` for a smooth transition from your skeleton state to your persisted data.

```tsx
import { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const MyPage = () => {
  const [parent] = useAutoAnimate();
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useLocalState([], "my-persisted-list");

  // Only render persisted UI after the component has reached the client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div ref={parent}>
      {mounted ? (
        <RealList items={items} />
      ) : (
        <ListSkeleton />
      )}
    </div>
  );
};
```
