import loadingImg from "../assets/loading.gif";

function Loading() {
  return (
    <div>
      <img src={loadingImg} alt="" className="h-10 w-10" />
    </div>
  );
}

export default Loading;
