import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Episode } from '@libs/db/models/episode.model';
import { Crud } from 'nestjs-mongoose-crud';
import { Course } from '@libs/db/models/course.model';
import { ModelType } from '@typegoose/typegoose/lib/types';

@ApiTags('课时')
@Crud({
    model: Episode,
})
@Controller('episodes')
export class EpisodesController {
    constructor(@InjectModel(Episode) public model: ModelType<Episode>,
                @InjectModel(Course) public coursemodel: ReturnModelType<typeof Course>) { }
}
