import { ClipLoader } from "react-spinners";

export default function SingleLoader({
  loadingSize = 13,
  color = "#ffffff",
  extraStyle = "",
}) {
  return (
    <div className={extraStyle}>
      {" "}
      <ClipLoader color={color} size={loadingSize} speedMultiplier={0.7} />
    </div>
  );
}
