import {useParams} from "react-router-dom";
import {details} from "../service/TramitesService";
import {FormalitiesContainer} from "../components/tramites/FormalitiesContainer";


export const TramiteDetails = () => {
    const {id} = useParams();
    const {name, sections} = details[id];

    return (
        <FormalitiesContainer data={{name, sections}}/>
    );

}
