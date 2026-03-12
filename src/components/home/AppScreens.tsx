const screens = [
  { label: "Quiz Screen", gradient: "from-cyan-400 to-blue-500" },
  { label: "Student Dashboard", gradient: "from-gray-700 to-gray-900" },
  { label: "Test Archive", gradient: "from-indigo-400 to-purple-500" },
];
const AppScreens = () => {
  return (
    <section className="bg-gray-50/70 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">App Screens Preview</h2>
          <p className="mt-2 text-sm text-gray-500">
            Experience our intuitive and powerful mobile application
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {screens.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3">
              <div
                className={`relative h-65 w-32.5 overflow-hidden rounded-[28px] border-[5px] border-gray-800 bg-linear-to-br shadow-xl ${s.gradient}`}
              >
                <div className="absolute inset-0 flex flex-col gap-2 p-3">
                  <div className="h-3 w-3/4 rounded bg-white/30" />
                  <div className="h-24 w-full rounded-xl bg-white/20" />
                  <div className="h-2 w-1/2 rounded bg-white/25" />
                  <div className="h-2 w-2/3 rounded bg-white/25" />
                  <div className="mt-1 flex gap-1.5">
                    <div className="h-8 flex-1 rounded-lg bg-white/20" />
                    <div className="h-8 flex-1 rounded-lg bg-white/20" />
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppScreens;
