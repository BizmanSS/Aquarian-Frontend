export function Button2({ content, onClick, active, disabled }) {
  return (
    <button
      className={`flex flex-col items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${active ? " " : ""}
      ${!disabled ? " " : " cursor-not-allowed"}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
