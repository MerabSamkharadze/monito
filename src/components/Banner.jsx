import Image from "next/image";
import banner2 from "@/public/images/banner2.jpg";
import Button from "@/components/Button";

export default function Banner() {
  return (
    <div className="rounded-3xl relative overflow-hidden">
      <div className="absolute top-16 right-16 z-10 max-w-md text-end ">
        <h2 className=" font-extrabold text-5xl text-primary text-end">
          One more friend
        </h2>
        <h3 className=" font-bold mt-2  text-3xl text-primary text-end">
          Thousands more fun!
        </h3>
        <p className="mt-2 text-end text-xs">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="flex items-center justify-end gap-4  mt-9 ">
          <Button content={"View Intro"} />
          <Button content={"Explore Now"} fill />
        </div>
      </div>
      <Image
        src={banner2}
        alt="banner-2-img"
        width={1180}
        height={378}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
