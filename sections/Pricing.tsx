import GridSection from "../templates/sections/GridSection";

export default function PricingSection() {
  return (
    <GridSection
      className="grid gap-4 grid-cols-3 grid-rows-3 bg-blue-100"
      children={[<p>1</p>, <p>2</p>, <p>3</p>]}
    />
  );
}
