import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Course } from '@libs/db/models/course.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
@ApiTags('课程视频')
@Crud({
    model: Course,
})
@Controller('courses')
export class CoursesController {
    constructor(@InjectModel(Course) public model: ReturnModelType<typeof Course>) { }
}
