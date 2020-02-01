import { Controller } from '@nestjs/common';

import { User } from '@libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
@Crud({
    model: User,
})
@ApiTags('用户')
@Controller('users')
export class UsersController {
    // constructor(public usersService: UsersService) { }
     constructor(@InjectModel(User) public model: ModelType<User>) { }
}
