import CodeBlock from "./code-block";
import { useLocalState } from "./use-local-state";
import code from "./use-local-state?raw";

// --- Mock Interfaces ---
type Plan = "Free" | "Pro" | "Ultimate";
type UserSettings = {
  username: string;
  plan: Plan;
  emailUpdates: boolean;
};

const DEFAULT_SETTINGS: UserSettings = {
  username: "Afrie",
  plan: "Pro",
  emailUpdates: true,
};

const repoLink = "https://github.com/afrieirham/use-local-state";
const docsLink = "https://github.com/afrieirham/use-local-state#readme";
const licenseLink =
  "https://github.com/afrieirham/use-local-state/blob/main/LICENSE";

const LocalStateDemoPage = () => {
  const [count, setCount, resetCount] = useLocalState(0, "ls-demo-counter");
  const [isEnabled, setIsEnabled, resetEnabled] = useLocalState(
    true,
    "ls-demo-toggle",
  );

  // The Complex Object
  const [settings, setSettings, resetSettings] = useLocalState(
    DEFAULT_SETTINGS,
    "ls-demo-settings",
  );

  return (
    <div className="min-h-screen bg-slate-50 text-black font-sans">
      {/* --- NAVIGATION HEADER --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              className="w-8 h-8"
              alt="use local state icon"
            />
            <span className="font-bold tracking-tight text-lg text-black">
              use-local-state
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-500">
              <a href={docsLink} className="hover:text-black transition-colors">
                Docs
              </a>
              <a
                href={licenseLink}
                className="hover:text-black transition-colors"
              >
                License
              </a>
            </div>
            <a
              href={repoLink}
              className="text-black hover:text-slate-600 transition-colors"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="bg-white border-b border-slate-100 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold tracking-tight text-black mb-6">
            State that <span className="text-blue-600">persists.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            A typesafe React hook that seamlessly syncs your state with
            LocalStorage. Smart parsing for BigInt, Booleans, Numbers, and JSON
            Objects.
          </p>
        </div>
        <CodeBlock code={code} title="use-local-state.ts" />
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-6xl mx-auto py-16 px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <span className="text-slate-400 font-medium text-sm italic">
            Try refreshing the page to see the magic.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="grid grid-cols-1 gap-8">
            {/* PERSISTING NUMBERS */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black/80">
                  Primitive Sync
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Restore values as Numbers, not Strings.
                </p>
                <div className="flex items-center justify-between bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <span className="text-5xl font-black text-black">
                    {count}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCount((c) => c + 1)}
                    className="w-12 h-12 bg-blue-600 text-white rounded-xl shadow-lg flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={resetCount}
                className="mt-6 text-xs font-bold text-slate-400 hover:text-black"
              >
                RESET COUNTER
              </button>
            </section>

            {/* PERSISTING BOOLEANS */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black/80">
                  Boolean Guards
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Persist toggles and switches effortlessly.
                </p>
                <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="font-semibold text-slate-700">
                    Notifications
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsEnabled(!isEnabled)}
                    className={`w-14 h-8 rounded-full transition-all relative ${isEnabled ? "bg-blue-600" : "bg-slate-300"}`}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all ${isEnabled ? "left-7" : "left-1"}`}
                    />
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={resetEnabled}
                className="mt-6 text-xs font-bold text-slate-400 hover:text-black uppercase"
              >
                Reset Toggle
              </button>
            </section>
          </div>

          {/* PERSISTING OBJECTS (Updated) */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-black/80">JSON Objects</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Automatic parsing for complex data structures.
              </p>

              <div className="space-y-4">
                {/* Field 1: String */}
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1"
                  >
                    Username
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={settings.username}
                    onChange={(e) =>
                      setSettings({ ...settings, username: e.target.value })
                    }
                    className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm font-medium focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Field 2: Selection */}
                <div className="space-y-1">
                  <label
                    htmlFor="plan"
                    className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1"
                  >
                    Plan
                  </label>
                  <select
                    name="plan"
                    value={settings.plan}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        plan: e.target.value as Plan,
                      })
                    }
                    className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm font-medium"
                  >
                    <option value="Free">Free</option>
                    <option value="Pro">Pro</option>
                    <option value="Ultimate">Ultimate</option>
                  </select>
                </div>

                {/* Field 3: Checkbox */}
                <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={settings.emailUpdates}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        emailUpdates: e.target.checked,
                      })
                    }
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    Receive email updates
                  </span>
                </label>
              </div>

              {/* Real-time JSON View */}
              <div className="mt-6 p-4 bg-black rounded-xl">
                <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">
                  Live JSON Output
                </p>
                <pre className="text-[11px] font-mono text-blue-400 overflow-auto">
                  {JSON.stringify(settings, null, 2)}
                </pre>
              </div>
            </div>
            <button
              type="button"
              onClick={resetSettings}
              className="mt-6 text-xs font-bold text-red-400 hover:text-red-600"
            >
              RESET OBJECT
            </button>
          </section>
        </div>
      </main>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* FEATURES SUMMARY */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-lg text-black/80">SSR Safety</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Checks for the existence of the <code>window</code> object to
                prevent hydration errors in Next.js.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-lg text-black/80">
                Typesafe Parsing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Leverages your initial state type to ensure your data is cast
                correctly when retrieved.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-lg text-black/80">
                Cross-Tab Sync
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Uses the Storage Event to synchronize state across multiple open
                tabs automatically.
              </p>
            </div>
          </section>
        </div>
      </div>

      <footer className="py-16 text-center text-slate-400 text-sm bg-white">
        &copy; {new Date().getFullYear()} use-local-state. Created by{" "}
        <a href="https://afrieirham.com" className="hover:underline">
          Afrie
        </a>
        . Icon by{" "}
        <a
          href="https://www.freepik.com/icon/file-sharing_8079836"
          className="hover:underline"
        >
          Freepik
        </a>
      </footer>
    </div>
  );
};

// --- Icons ---
const GitHubIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <title>github</title>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default LocalStateDemoPage;
