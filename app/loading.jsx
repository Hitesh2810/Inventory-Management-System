export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-ink">
      <div className="glass rounded-xl px-6 py-5 text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" />
        <p className="text-sm font-semibold text-white/72">Synchronizing inventory intelligence...</p>
      </div>
    </div>
  );
}
