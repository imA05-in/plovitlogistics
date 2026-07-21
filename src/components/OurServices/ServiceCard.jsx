import freightImg from "../../assets/DefaultImages/freight.png";

export default function ServiceCard({
  image = freightImg,
  label = "default",
  highlights,
}) {
  return (
    <div>
      <div className="p-2 ">
        <img src={image} alt=""  className="rounded"/>
      <p className="relative bottom-10 text-center font-bold text-xl bg-orange-400/70 text-blue-950">{label.toUpperCase()}</p>
      </div>
    </div>
  );
}
