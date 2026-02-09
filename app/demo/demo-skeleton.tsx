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
            <div className="flex items-center justify-between p-6 rounded-2xl border border-slate-100">
              <div className="h-12 w-16 rounded" />
              <div className="w-12 h-12 rounded-xl" />
            </div>
          </div>
          <div className="mt-6 h-4 w-28 rounded" />
        </section>

        {/* Boolean Guards Skeleton */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-black/80">Boolean Guards</h3>
            <p className="text-sm text-slate-500 mb-6">
              Persist toggles and switches effortlessly.
            </p>
            <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-100">
              <div className="h-5 w-28 rounded" />
              <div className="w-14 h-8 rounded-full" />
            </div>
          </div>
          <div className="mt-6 h-4 w-24 rounded" />
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
              <div className="h-3 w-20 rounded" />
              <div className="w-full h-10 rounded-lg" />
            </div>

            {/* Field 2: Selection */}
            <div className="space-y-1">
              <div className="h-3 w-12 rounded" />
              <div className="w-full h-10 rounded-lg" />
            </div>

            {/* Field 3: Checkbox */}
            <div className="flex items-center gap-3 p-2">
              <div className="w-4 h-4 rounded" />
              <div className="h-4 w-36 rounded" />
            </div>
          </div>

          {/* Real-time JSON View Skeleton */}
          <div className="mt-6 p-4 rounded-xl">
            <div className="h-3 w-28 rounded mb-2" />
            <div className="space-y-1">
              <div className="h-3 w-full rounded" />
              <div className="h-3 w-3/4 rounded" />
              <div className="h-3 w-1/2 rounded" />
            </div>
          </div>
        </div>
        <div className="mt-6 h-4 w-24 rounded" />
      </section>
    </div>
  );
}

export default DemoSkeleton;
