import Slider from "@/components/Slider/Slider";
import data from "../components/Slider/Testimonials.json";

const Test = () => {
  return (
    <>
      <Slider testimonialData={data} />
    </>
  );
};

export default Test;
