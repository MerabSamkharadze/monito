import Button from "./Button";

export default function Heading({ btn_content, h2, h1 }) {
  return (
    <div className="flex w-full items-center justify-between mt-16 px-36">
      <div>
        <h2>{h2}</h2>
        <h1 className=" text-2xl text-primary  font-bold leading-9">{h1}</h1>
      </div>
      <Button content={btn_content} />
    </div>
  );
}
