import Api from './Api';

const url = "/newss";


const getAll = async () => {
    return await Api.get(`${url}`);
};

// const existsByName = (name) => {
//     return Api.get(`${url}/name/${name}`);
// };

// const create = (name,departurePlace,describe,price,time,emptySeat,tourImage1,tourImage2,tourImage3,tourImage4,tourImage5,highLight) => {
//     const body = {
//         name,
//         departurePlace,
//         describe,
//         price,
//         time,
//         emptySeat,
//         tourImage1,
//         tourImage2,
//         tourImage3,
//         tourImage4,
//         tourImage5,
//         highLight
//     };

//     return Api.post(url, body);
// };

const getByID = (id) => {
    return Api.get(`${url}/${id}`);
};

// const update = (id, name, totalMember) => {
//     const body = {
//         name,
//         totalMember
//     }
//     return Api.put(`${url}/${id}`, body);
// };

// const deleteByIds = (ids) => {
//     return Api.delete(`${url}/${ids.toString()}`);
// };

// export
const api = { getAll,getByID }
export default api;