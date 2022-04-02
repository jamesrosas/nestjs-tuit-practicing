import { IsString } from "class-validator";


export class CreateTuitDto {

    // con @IsString() nos aseguramsos que la data que enviamos a nuestra API es un string
    @IsString()
    readonly content: string
}
