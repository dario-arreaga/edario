export default function ServiceCard({ title, description, items }) {
  return (
    <div className="bg-[rgba(15,23,42,0.7)] border border-[#1e293b] rounded-2xl p-6 shadow-[0_5px_20px_rgba(0,0,0,0.3)]">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-[#cbd5e1] text-sm mb-4">{description}</p>

      {items && (
        <ul className="space-y-1 mb-4 text-sm text-[#cbd5e1]">
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}

      <p className="text-xs text-[#64748b]">
        Consulta al <span className="font-semibold">0991680747</span>
      </p>
    </div>
  );
}
