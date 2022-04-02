import { IsString } from "class-validator";

export class UpdateTuitDto {
    @IsString()
    readonly content: string
}
