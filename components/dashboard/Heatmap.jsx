export function Heatmap() {
  const cells = Array.from({ length: 35 }).map((_, index) => 24 + ((index * 17) % 76));
  return (
    <div className="grid grid-cols-7 gap-2">
      {cells.map((value, index) => (
        <div
          key={index}
          className="aspect-square rounded-md border border-white/10"
          style={{
            background: `rgba(${value > 70 ? "52,245,165" : value > 45 ? "0,213,255" : "124,58,237"}, ${0.12 + value / 135})`,
            boxShadow: value > 82 ? "0 0 22px rgba(52,245,165,.32)" : "none"
          }}
          title={`Zone intensity ${value}%`}
        />
      ))}
    </div>
  );
}
