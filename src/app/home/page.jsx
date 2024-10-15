import Image from "next/image";
import banner from "@/public/images/banner.png";

export default function page() {
  return (
    <section>
      <Image src={banner} alt="banner" width={1440} height={695} />
    </section>
  );
}
