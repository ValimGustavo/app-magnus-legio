import { Injectable } from "@nestjs/common"

@Injectable()
export class UserService{

    readUser(id?:string){
        return 'function readUser'
    }

    createUser(objectUser){
        return 'create object: ' + objectUser
    }

    updateUser(objectUser){
        return 'function udapteUser'
    }


    deleteUser(id){
        return 'function deleteUser'
    }


}