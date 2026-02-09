function DemoSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="grid grid-cols-1 gap-8">
        {/* Primitive Sync Skeleton */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-black/80">Primitive Sync</h3>
            <p className="text-sm text-slate-500 mb-6">
              Restore values as Numbers, not Strings.
            </p>
            <div className="flex items-center justify-between bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <span className="text-5xl font-black text-black"></span>
              <button
                type="button"
                className="w-12 h-12 bg-blue-600 text-white rounded-xl shadow-lg flex items-center justify-center font-bold"
              >
                +
              </button>
            </div>
          </div>
          <button
            type="button"
            className="mt-6 text-xs font-bold text-slate-400 hover:text-black"
          >
            RESET COUNTER
          </button>
        </section>

        {/* Boolean Guards Skeleton */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-black/80">Boolean Guards</h3>
            <p className="text-sm text-slate-500 mb-6">
              Persist toggles and switches effortlessly.
            </p>
            <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="font-semibold text-slate-700">
                Notifications
              </span>
              <button
                type="button"
                className={`w-14 h-8 rounded-full transition-all relative`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all}`}
                />
              </button>
            </div>
          </div>
          <button
            type="button"
            className="mt-6 text-xs font-bold text-slate-400 hover:text-black uppercase"
          >
            Reset Toggle
          </button>
        </section>
      </div>

      {/* JSON Objects Skeleton */}
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
                className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm font-medium"
              >
                <option value=""></option>
                <option value="Free">Free</option>
                <option value="Pro">Pro</option>
                <option value="Ultimate">Ultimate</option>
              </select>
            </div>

            {/* Field 3: Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors">
              <input
                type="checkbox"
                disabled
                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-slate-700">
                Receive email updates
              </span>
            </label>
          </div>

          <div className="mt-6 p-4 bg-black rounded-xl">
            <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">
              Live JSON Output
            </p>
            <pre className="text-[11px] font-mono text-blue-400 overflow-auto">
              {JSON.stringify(
                {
                  username: "",
                  plan: "",
                  emailUpdates: "",
                },
                null,
                2,
              )}
            </pre>
          </div>
        </div>
        <button
          type="button"
          className="mt-6 text-xs font-bold text-red-400 hover:text-red-600"
        >
          RESET OBJECT
        </button>
      </section>
    </div>
  );
}

export default DemoSkeleton;
