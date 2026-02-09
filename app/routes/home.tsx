import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useState } from "react";
import CodeBlock from "~/components/code-block";
import Demo from "~/demo/demo";
import DemoSkeleton from "~/demo/demo-skeleton";
import code from "~/hooks/use-local-state?raw";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "use-local-state" },
    {
      name: "description",
      content:
        " A typesafe React hook that seamlessly syncs your state with LocalStorage. Smart parsing for BigInt, Booleans, Numbers, and JSON Objects.",
    },
  ];
}

const repoLink = "https://github.com/afrieirham/use-local-state";
const docsLink = "https://github.com/afrieirham/use-local-state#readme";
const licenseLink =
  "https://github.com/afrieirham/use-local-state/blob/main/LICENSE";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [parent] = useAutoAnimate();

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
            Sync <span className="text-blue-600">react state</span> to{" "}
            <span className="text-blue-600">local storage.</span>
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
        <div ref={parent}>{isMounted ? <Demo /> : <DemoSkeleton />}</div>
        <div className="mt-8 flex items-center justify-center gap-2 text-[11px] font-medium text-slate-400 bg-slate-100 w-fit mx-auto px-4 py-1.5 rounded-full">
          <svg
            className="w-3.5 h-3.5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <title>info icon</title>
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            This demo uses{" "}
            <a
              href="https://auto-animate.formkit.com?ref=use-local-state.pages.dev"
              className="text-blue-500 hover:underline"
            >
              auto-animate
            </a>{" "}
            to smooth out the initial hydration transition.
          </span>
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
                2
              </div>
              <h3 className="font-bold text-lg text-black/80">
                Cross-Tab Sync
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Uses the Storage Event to synchronize state across multiple open
                tabs automatically.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-lg text-black/80">Client-Only</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Designed strictly for the browser. Use a mount guard for SSR
                hydration.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* --- DID YOU LIKE THIS? SECTION --- */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Did you like this project?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Please give it a star on{" "}
            <a href={repoLink} className="text-blue-400 underline">
              GitHub
            </a>
            . Thank you!
          </p>
          <p className="text-slate-600 leading-relaxed">
            You might also be interested in{" "}
            <a
              href="https://use-sortable-list.pages.dev"
              className="text-blue-400 underline"
            >
              use-sortable-list
            </a>
            .
          </p>
        </div>
      </section>

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
}

// --- Icons ---
const GitHubIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <title>github</title>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
