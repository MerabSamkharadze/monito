import Image from "next/image";
import banner from "@/public/images/banner.png";
import Heading from "@/components/Heading";

export default function page() {
  return (
    <>
      <section>
        <Image src={banner} alt="banner" width={1440} height={695} />
      </section>
      <section>
        <Heading
          btn_content={"View more"}
          h2={"Whats new?"}
          h1={"Take a look at some of our pets"}
        />
      </section>
    </>
  );
}