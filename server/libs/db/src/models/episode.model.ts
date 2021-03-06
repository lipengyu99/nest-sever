import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Course } from '@libs/db/models/course.model';
@modelOptions({
    schemaOptions: {
        timestamps: true,
    },
})
export class Episode {
    @ApiProperty({ description: '名称' })
    @prop()
    episodename: string;

    @ApiProperty({ description: '文件' })
    @prop()
    episodefile: string;

    @ApiProperty({ description: '所属课程' })
    @prop({ ref: 'Course' })
    course: Ref<Course>;

}
