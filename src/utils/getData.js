import axios from "axios";
const jwt ='e20b647c007e06e1a141b863cc7734d715ca3613cb41fed150721b2548848bc93321787c3bf816db9d404464a337cd1c31d6de1959d7ec8021bd474bd9f3458c7b7a50451e733028c6d805af176cfd83283fc55bf1493fa6b2bd0e34be3680c8b507ddce5cfb2b8054c6f78f32550f0a0a8d99d610aafe9faeb633074267dca8'
const Url ='https://techsynergy-f44e44b93be8.herokuapp.com/api/projects/9?populate[]=*&populate[]=project_objectives&populate[]=eligibility_criteria.eligibility_requirements&populate[]=project_teches&populate[]=project_categories&populate[]=project_applications&populate[]=project_resources&populate[]=project_sub_categories&populate[]=companyLogo';

 const getAll = async (baseUrl = Url ) =>{
    const {data} = await axios.get(baseUrl,
        {
            headers:{
                Authorization:`Bearer ${jwt}`,
            }
        })
    return data;

}
const postData = async (url, postObject) => {

try {
        console.log(postObject)
        const { data } = await axios.post(url, postObject);
        console.log('our data after loging',data)
        return data;
} catch (error) {
    console.log(error.response.data.error)
   return error?.response?.data?.error
}
  };
const exported = {getAll, postData};
export default exported;
