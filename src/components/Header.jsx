import Link from "next/link";
import Image from "next/image";
import frameImg from "@/public/images/frame.png";
import Button from "./Button";

export default function Header() {
  return (
    <header className=" flex items-center justify-between py-8 px-32 w-full h-10 bg-transparent absolute z-50">
      <nav className="flex justify-between items-center w-[28rem]">
        <Link href={"/"}>
          <Image
            className=" cursor-pointer"
            src={frameImg}
            width={115}
            height={40}
            alt="logo"
          />
        </Link>

        <Link className=" cursor-pointer text-primary" href={"/home"}>
          Home
        </Link>
        <Link className=" cursor-pointer text-primary" href={"/category"}>
          Category
        </Link>
        <Link className=" cursor-pointer text-primary" href={"/contact"}>
          Contact
        </Link>
      </nav>
      <div>
        <Button content={"Join the community"} fill />
        <select
          className=" py-3 px-2 bg-transparent outline-none"
          name="leng"
          id="language"
        >
          <option value="geo">Geo</option>
          <option value="eng">Eng</option>
        </select>
      </div>
    </header>
  );
}
