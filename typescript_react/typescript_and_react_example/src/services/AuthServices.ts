// creating a dummy user interface auth

import { User } from './../models/Models';

export class AuthServices {


    public async login(userName:String, password:String):Promise<User | undefined> {

        // dummy user data

        const user:User = {
            id: 1,
            name: 'John Doe',
            email: 'jhonDoe@hotmail.com',
            userName: 'jhonDoe',
            password: '123456'
        }

        if(user.userName === userName){
            if(user.password === password){
                return user;
            }
        }else {
            return undefined;
        }

    }


}