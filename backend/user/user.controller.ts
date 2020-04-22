import { Controller, Get, Post, Put, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService = new UserService()) { }

    @Get()
    readUser(req, res) {
        return this.userService.readUser()
    }

    @Post()
    createUser(req, res) {
        return this.userService.createUser(req.body)
    }

    @Patch()
    updateUser() {
        return this.userService.updateUser({})

    }

    @Delete()
    deleteUser() {
        return this.userService.deleteUser('1')
    }


}
