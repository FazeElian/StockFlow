import {
    Table,
    Column,
    Model,
    DataType,
    BelongsTo,
    ForeignKey,
    HasMany,
    AllowNull,
} from "sequelize-typescript";

// Models
import Product from "./Product";
import User from "./User";

@Table({
    tableName: "categories"
})

class Category extends Model {
    @AllowNull(false)
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

    @ForeignKey(() => User)
    declare userId : number

    @BelongsTo(() => User)
    declare user : User
}

export default Category;