export default function ServiceDescription({ description }) {
  const hlArr = description.highlights || [];
  return (
    <div className="p-2 text-justify flex flex-col gap-20 items-center">
      <div className="max-w-xl flex flex-col gap-5">
        <div className="text-center text-2xl font-medium text-blue-950">
          {description.label}
        </div>
        {description.description}
      </div>
      <div className="max-w-xl flex flex-col gap-2 text-blue-950">
      {hlArr.length > 0 ? <div className="text-orange-500 font-bold text-lg">Key Highlights</div> : ""}
        {hlArr.map((item) => (
          <p key={item}>{item.hl}</p>
        ))}
      </div>
    </div>
  );
}
