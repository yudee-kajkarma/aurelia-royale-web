const letters = ["L", "O", "A", "D", "I", "N", "G"];

export default function LoginLoading() {
  return (
    <div className="fixed inset-0 z-[120] grid place-items-center bg-[#034f3d]">
      <div className="flex items-center gap-3 text-6xl font-semibold uppercase tracking-[0.35em] text-white/55 sm:text-7xl">
        {letters.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="inline-block animate-pulse"
            style={{ animationDelay: `${index * 120}ms`, animationDuration: "1200ms" }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}