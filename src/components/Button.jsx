export default function Button({ content, fill }) {
  return fill ? (
    <button className="h-11 text-white bg-primary py-3 px-7 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ">
      {content}
    </button>
  ) : (
    <button className="h-11 bg-transparent text-primary border border-primary py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-white">
      {content}
    </button>
  );
}
