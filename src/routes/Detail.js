import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [load, setLoad] = useState(true);
  const [mDetail, setMDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setMDetail(json.data.movie);
        setLoad(false);
      });
  }, []);

  return (
    <div>
      <h1>
        <Link to={`/`}>Back</Link>
      </h1>
      {load ? (
        <h2>Loading....</h2>
      ) : (
        <div>
          <img src={mDetail.large_cover_image} />
          <h2>{mDetail.title}</h2>
        </div>
      )}
    </div>
  );
}

export default Detail;
