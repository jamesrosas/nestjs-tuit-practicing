import { IsObject, IsString } from "class-validator";
import { User } from "src/modules/users/entities";


export class CreateTuitDto {

    // con @IsString() nos aseguramsos que la data que enviamos a nuestra API es un string
    @IsString()
    readonly content: string

    @IsObject()
    readonly user: Partial<User>

}
