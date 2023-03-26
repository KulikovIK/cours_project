import axios from "axios";

class PostService {
    static async getIdeasAll(){
        try{
            const responce = await axios.get('http://127.0.0.1:8000/api/ideas/')
            console.log('test')
            console.log(responce.data)
            return responce.data
        } catch (e) {
            console.log(e)
        }
    }
    static async getJusersAll(){
        try{
            const responce = await axios.get('http://127.0.0.1:8000/api/jusers/')
            return responce.data
        } catch (e) {
            console.log(e)
        }
    }
    static async getLikesAll(){
        try{
            const responce = await axios.get('http://127.0.0.1:8000/api/likes/')
            return responce.data
        } catch (e) {
            console.log(e)
        }
    }
    static async getUsersAll(){
        try{
            const responce = await axios.get('http://127.0.0.1:8000/api/users/')
            return responce.data
        } catch (e) {
            console.log(e)
        }
    }
}

export default PostService