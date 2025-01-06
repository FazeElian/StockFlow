import {
    Table,
    Column,
    Model,
    DataType,
    BelongsTo,
    ForeignKey,
    AllowNull,
    Unique
} from "sequelize-typescript";

// Models
import Category from "./Category";
import User from "./User";

@Table({
    tableName: "products"
})

class Product extends Model {
    @AllowNull(false)
    @ForeignKey(() => Category)
    declare categoryId: number

    @AllowNull(false)
    @Column({
        type: DataType.STRING(150)
    })
    name: string

    @AllowNull(false)
    @Unique(true)
    @Column({
        type: DataType.STRING(10)
    })
    code: string

    @AllowNull(false)
    @Column({
        type: DataType.DECIMAL
    })
    price: number

    @Column({
        type: DataType.STRING
    })
    image: string

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    inflows: number

    @Column({
        type: DataType.INTEGER
    })
    outflows: number

    @Column({
        type: DataType.STRING
    })
    description: string

    @BelongsTo(() => Category)
    declare category: Category

    @ForeignKey(() => User)
    declare userId : number

    @BelongsTo(() => User)
    declare user: User
}

export default Product;