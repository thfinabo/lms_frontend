import { toast } from "react-toastify";
import { APIEndPoint } from "../config";

export class AdminAPIRequestImpl extends APIEndPoint{
    registerEndpoint = '/admin/register';
    loginEndPoint = '/admin/login';

    async register(data) {
        try{
            const { data: response } = await this.request.post(
                `${this.registerEndpoint}`, data,
            );
            return response;
        }catch(err){
            toast.error(err?.response?.data?.message)
            console.log(err)
        }
    }

    async login(data) {
        try{
            const { data: response } = await this.request.post(
                `${this.loginEndPoint}`, data,
            );
            return response;
        }catch(err){
            toast.error(err?.response?.data?.message)
            console.log(err)
        }
    }
}

export const adminAuthRequest = new AdminAPIRequestImpl()