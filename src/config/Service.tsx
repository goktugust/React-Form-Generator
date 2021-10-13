import axios from 'axios'
const service = axios.create({
    baseURL:"https://www.jsonbulut.com/json"
})
// 32
// 28
export async function getForm() {
    const prm = {
        ref:"806e6b62c34c9533484edb7c1b295a8c",
        formId:32
    }
    
        let response = await service('/forms.php', {params:prm})
        
        return response.data;
    
}

