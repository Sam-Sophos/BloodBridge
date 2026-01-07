type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  label,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
    >
      {label}
    </button>
  );
}
