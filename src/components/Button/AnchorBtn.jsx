export default function AnchorBtn({ href, label, userclassname }) {
  return (
    <a href={href} className="bg-blue-900 text-white font-bold p-4 rounded hover:bg-orange-500 transition">
      {label}
    </a>
  );
}
