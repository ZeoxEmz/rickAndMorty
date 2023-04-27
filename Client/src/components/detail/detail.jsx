import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, getCharacterDetail } from "../../redux/actions";
import styles from "./detail.module.css"

const Detail=(param)=>{
    const params = useParams();
    const dispatch = useDispatch();
    const characterDetail = useSelector((state) => state.characterDetail);

    useEffect(() => {
    dispatch(getCharacterDetail(params.id));

    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, params.id]);
  
    return(
      <div className={styles.contenedor}>
        <div className={styles.div}>
            <h1>Detalles de: {characterDetail.name}</h1>
            <img src={characterDetail.image} alt="" />
            <h2 className={styles.subtitulo}>origin: {characterDetail.origin}</h2>
            <h2 className={styles.subtitulo}>gender:{characterDetail.gender}</h2>
            <h2 className={styles.subtitulo}>species:{characterDetail.species}</h2>
            <h2 className={styles.subtitulo}>status:{characterDetail.status}</h2>
        </div>
      </div>
        
    )
}
export default Detail;