
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  return (
    <div className="p-8">
      <h2 className="font-display text-3xl font-bold">Movie Detail — ID: {id}</h2>
    </div>
  );
}
export default MovieDetail;