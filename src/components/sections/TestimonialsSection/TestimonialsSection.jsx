import TestimonialList from "../../TestimonialList/TestimonialList";

const TestimonialsSection = () => {
  return (
    <div className="">
      <p className="text-center text-white text-3xl sm:text-5xl font-black my-10 px-8 sm:px-0">
        Meet my <span className="text-cyan-400">Happy Clients</span>
      </p>
      <TestimonialList direction="left" />
      <TestimonialList direction="right" />
    </div>
  );
};

export default TestimonialsSection;
