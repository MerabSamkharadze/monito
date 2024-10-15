export default function Button({ content, fill }) {
  return fill ? (
    <button className="h-11 text-white bg-primary  py-3 px-7 rounded-full">
      {content}
    </button>
  ) : (
    <button className=" h-11   bg-transparent text-primary border borrder py-2 px-6 rounded-full border-primary">
      {content}
    </button>
  );
}
