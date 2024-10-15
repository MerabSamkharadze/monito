import Image from "next/image";
import bulet from "@/public/images/bulet.png";
import present from "@/public/images/present.png";
import productImg from "@/public/images/product.jpg";

export default function ProductCard({ name, sex, age, price }) {
  return (
    <div className=" bg-white w-72  rounded-xl p-2 font-semibold shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
      <Image src={productImg} alt="dog-img" width={270} height={264} />
      <h3 className="mt-4">{name}</h3>
      <p className="text-grey flex items-center gap-3 text-xs">
        Gene: {sex}
        <span>
          <Image src={bulet} alt="bulet" />
        </span>
        Age: {age}
      </p>
      <p>
        {price} <span>GEL</span>
      </p>
      <p className="text-primary flex items-center gap-3 py-2 px-2 bg-primarybg mt-3">
        <Image src={present} alt="present-icon" width={20} height={20} />
        <span>
          <Image src={bulet} alt="bulet-icon" />
        </span>
        Free Toy & Free Shaker
      </p>
    </div>
  );
}
