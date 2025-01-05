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
    declare name: string

    @Column({
        type: DataType.STRING
    })
    declare description: string
}

export default Category;