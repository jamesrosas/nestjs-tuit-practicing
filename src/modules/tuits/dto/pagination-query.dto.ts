import { IsNumber, IsOptional, IsPositive } from "class-validator"

export class PaginationDto {


    @IsNumber()
    @IsPositive()
    @IsOptional()
    limit: number

    @IsNumber()
    @IsPositive()
    @IsOptional()
    offset: number

    // estos datos al viajar por http llegaran como un string, razon por la cual es necesario que dentro de nuestro ValidationPipe hagamos uso de la propiedad transformOptions: { enabledImplicitConversion: true} para dichos datos lleguen como numero.
    
}