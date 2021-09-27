import { useParams } from "react-router-dom";
import { FormalitiesContainer } from "../components/tramites/FormalitiesContainer";
import React, {useEffect, useState} from "react";
import {getDetails} from "../service/FormalityService";

export const FormalityDetails = () => {
    const { id } = useParams();
    const [formality, setFormality] = useState({name: "", sections: []});

    useEffect(()=>{
        const service = getDetails(id);
        service.then((data) => {setFormality(data)});
    }, []);

    return <FormalitiesContainer data={formality} />;
};
