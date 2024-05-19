import { APIEndPoint } from "../config";

export class UserAPIRequestImpl extends APIEndPoint{
    signUpEndpoint = '/signup';
    async signUp(data) {
        try{
            const { data: response } = await this.request.post(
                `${this.signUpEndpoint}`, data,
            );
            return response;
        }catch(err){
            console.log(err)
        }
    }
}

export const authRequest = new UserAPIRequestImpl()