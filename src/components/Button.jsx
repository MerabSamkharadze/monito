export default function Button({ content, fill }) {
  return fill ? (
    <button className="h-11 text-yellow-50 bg-indigo-900 hover:bg-indigo-800 py-3 px-7 rounded-full">
      {content}
    </button>
  ) : (
    <button className=" h-11   bg-transparent text-indigo-900 border borrder py-2 px-6 rounded-full border-indigo-900">
      {content}
    </button>
  );
}
