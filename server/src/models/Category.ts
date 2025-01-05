import {
    Table,
    Column,
    Model,
    DataType,
    HasMany
} from "sequelize-typescript";

// Product model
import Product from "./Product";

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

    @HasMany(() => Product, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    declare products: Product[]
}

export default Category;