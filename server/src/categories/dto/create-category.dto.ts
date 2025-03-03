import { IsString, IsNotEmpty } from "class-validator"

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty({ message: "El nombre de la categoría no puede ir vacío" })
    name: string

    @IsString()
    description: string
}
