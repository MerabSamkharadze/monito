import Image from "next/image";
import bulet from "@/public/images/bulet.png";

export default function Card({ imgSrc, sex, age }) {
  return (
    <div className=" bg-white w-72 h-96 rounded-xl p-2 font-semibold shadow-lg">
      <Image src={imgSrc} alt="dog-img" width={270} height={264} />
      <h3 className="mt-4">MO231 - Pomeranian White</h3>
      <p className="text-grey flex items-center gap-3 text-xs">
        Gene: {sex}
        <span>
          <Image src={bulet} alt="bulet" />
        </span>
        Age: {age}
      </p>
      <p>
        6.900.000 <span>GEL</span>
      </p>
    </div>
  );
}
