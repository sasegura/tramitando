import axios from 'axios';


const dataBasePath = "/assets/formalities/data";

const getList = () => {
    return axios.get(`${dataBasePath}/formalities_list.json`).then(res => res.data);
};

const getDetails = (id) => {
    return axios.get(`${dataBasePath}/formalities_details.json`).then(res => res.data[id]);
};

const getGuide = (id) => {
    return axios.get(`${dataBasePath}/formalities_guides.json`).then(res => res.data[id]);
};

export {getList, getDetails, getGuide};
