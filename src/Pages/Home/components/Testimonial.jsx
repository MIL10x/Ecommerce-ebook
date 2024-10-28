import pone from "../../../assets/Personone.jpg";
import ptwo from "../../../assets/Persontwo.jpg";
import pthree from "../../../assets/Personthree.jpg";
import pfour from "../../../assets/Personfour.jpg";

const Testimonial = () => {
  return (
    <div className="text-center flex flex-col gap-7 mt-20">
      <p className="text-3xl font-semibold">Testimonial</p>
      <div className="grid md:grid-cols-2">
        <div className="border-2 md:rounded-ss-xl flex flex-col gap-5 items-center justify-center h-72">
          <p className="font-bold text-xl">Lorem ipsum dolor sit amet </p>
          <p className="w-[50%] text-lg">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum
          </p>
          <div className="flex gap-5 items-center">
            <img src={pone} className="size-14 rounded-full" alt="" />
            <p>John</p>
          </div>
        </div>
        <div className="border-2 md:rounded-se-2xl flex flex-col gap-5 items-center justify-center h-72">
          <p className="font-bold text-xl">Lorem ipsum dolor sit amet </p>
          <p className="w-[50%] text-lg">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum
          </p>
          <div className="flex gap-5 items-center">
            <img src={ptwo} className="size-14 rounded-full" alt="" />
            <p>Lakshmi</p>
          </div>
        </div>
        <div className="border-2 md:rounded-es-xl flex flex-col gap-5 items-center justify-center h-72">
          <p className="font-bold text-xl">Lorem ipsum dolor sit amet </p>
          <p className="w-[50%] text-lg">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum
          </p>
          <div className="flex gap-5 items-center">
            <img src={pthree} className="size-14 rounded-full" alt="" />
            <p>Luke</p>
          </div>
        </div>
        <div className="border-2 md:rounded-ee-xl flex flex-col gap-5 items-center justify-center h-72">
          <p className="font-bold text-xl">Lorem ipsum dolor sit amet </p>
          <p className="w-[50%] text-lg">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum
          </p>
          <div className="flex gap-5 items-center">
            <img src={pfour} className="size-14 rounded-full" alt="" />
            <p>Mathew</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
