import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiTags, ApiProperty } from '@nestjs/swagger';
import { Episode } from '@libs/db/models/episode.model';
@modelOptions({
    schemaOptions: {
        timestamps: true,
        toJSON: { virtuals: true },
    },
})
export class Course {
    @ApiProperty({ description: '课程名称' })
    @prop()
    coursename: string;

    @ApiProperty({ description: '课程封面' })
    @prop()
    coursecover: string;
    @ApiProperty({ description: '课时' })
    @arrayProp({
        ref: 'Episode',
        localField: '_id',
        foreignField: 'course',
    })
    episodes: Array<Ref<Episode>>;

}
