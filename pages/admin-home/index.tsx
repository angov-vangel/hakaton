import bgImage from "./../../img/adminbg.png";

export default function AdminHome() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "100vh",
      }}
    ></div>
  );
}
