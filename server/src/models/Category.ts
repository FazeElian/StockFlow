import {
    Table,
    Column,
    Model,
    DataType,
} from "sequelize-typescript";

@Table({
    tableName: "categories"
})

class Category extends Model {
    @Column({
        type: DataType.STRING(150)
    })
    name: string

    @Column({
        type: DataType.STRING
    })
    description: string
}

export default Category;