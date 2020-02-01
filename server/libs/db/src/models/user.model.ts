import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiTags, ApiProperty } from '@nestjs/swagger';
@modelOptions({
    schemaOptions: {
        timestamps: true,
    },
})
export class User {
    @ApiProperty()
    @prop()
    username: string;
    @ApiProperty()
    @prop()
    password: string;
}
