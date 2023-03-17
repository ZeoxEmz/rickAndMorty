import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, getCharacterDetail } from "../../redux/actions";

const Detail=(param)=>{
    const params = useParams();
    const dispatch = useDispatch();
    const characterDetail = useSelector((state) => state.characterDetail);

    useEffect(() => {
    dispatch(getCharacterDetail(params.id));

    return () => {
      dispatch(cleanDetail());
    };
  }, []);
    return(
        <div>
            <h1>Detalles de: {characterDetail.name}</h1>
            <img src={characterDetail.image} alt="" />
            <h2>name: {characterDetail.name}</h2>
            <h2>gender:{characterDetail.gender}</h2>
            <h2>species:{characterDetail.species}</h2>
            <h2>status:{characterDetail.status}</h2>
        </div>
    )
}
export default Detail;