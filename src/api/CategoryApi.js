import Api from './Api';

const url = "/categorys";




const getAll = () => {
    return Api.get(`${url}`);
};


// const existsByName = (name) => {
//     return Api.get(`${url}/name/${name}`);
// };

// const create = (name,schedule,tripImage1,tripImage2,tripImage3,tripImage4,tourId) => {
//     const body = {
//         name,
//         schedule,
//         tripImage1,
//         tripImage2,
//         tripImage3,
//         tripImage4,
//         tourId

//     };

//     return Api.post(url, body);
// };

// const getByID = (id) => {
//     console.log(id);
//     return Api.get(`${url1}/${id}`);
// };

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
const api = { getAll }
export default api;