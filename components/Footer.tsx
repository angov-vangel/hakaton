import FooterLogos from "./FooterLogos";

export const Footer = () => {
  return (
    <div
      className=" py-5 border-t-2 border-b-2 mt-auto"
      style={{ borderTop: "1px solid #0AE47C" }}
    >
      <div className="px-20">
        <div className="w-4/5 flex justify-end ">
          <FooterLogos />
        </div>
      </div>
    </div>
  );
};
