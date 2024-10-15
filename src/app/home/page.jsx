import Image from "next/image";
import banner from "@/public/images/banner.jpg";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import CardsList from "@/components/CardsList";
import ProductsList from "@/components/ProductsList";
import Banner from "@/components/Banner";

export default function page() {
  return (
    <>
      <section>
        <div className="absolute mt-52 ml-32 z-10 max-w-lg ">
          <h2 className=" font-extrabold text-6xl text-primary">
            One more friend
          </h2>
          <h3 className=" font-bold mt-5  text-5xl text-primary ">
            Thousands more fun!
          </h3>
          <p className="mt-10">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex items-center  gap-4  mt-9">
            <Button content={"View Intro"} />
            <Button content={"Explore Now"} fill />
          </div>
        </div>
        <Image
          src={banner}
          alt="banner"
          width={1440}
          height={695}
          className="rounded-bl-[45px] rounded-br-[45px] relative"
        />
      </section>
      <section>
        <Heading
          btn_content={"View more"}
          h2={"Whats new?"}
          h1={"Take a look at some of our pets"}
        />
      </section>
      <section className="ml-32 mr-32 mt-8">
        <CardsList />
      </section>
      <section className="ml-32 mr-32 mt-8  ">
        <Banner />
      </section>
      <section>
        <Heading
          btn_content={"View more"}
          h2={"Hard to choose right products for your pets?"}
          h1={"Our Products"}
        />
      </section>
      <section className="ml-32 mr-32 mt-8">
        <ProductsList />
      </section>
    </>
  );
}
