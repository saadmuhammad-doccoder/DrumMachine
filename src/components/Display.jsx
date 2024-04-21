import "bootstrap/dist/css/bootstrap.min.css";

export function Display(props) {
  return (
    <div
      style={{ width: "20vw" }}
      id="display"
      className="p-3 bg-dark text-white d-flex justify-content-center align-items-center"
    >
      <h2>{props.audioName}</h2>
    </div>
  );
}
