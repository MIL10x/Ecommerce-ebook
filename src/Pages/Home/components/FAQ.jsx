import { Qacard } from "../../../Components/index";

const FAQ = () => {
  return (
    <div className="mt-20 flex flex-col gap-10 border-2 rounded-xl p-5 py-7">
      <p className="text-2xl font-semibold w-full text-center">
        Question in Mind?
      </p>
      <Qacard />
      <Qacard />
      <Qacard />
    </div>
  );
};

export default FAQ;
