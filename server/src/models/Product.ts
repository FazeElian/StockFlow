import {
    Table,
    Column,
    Model,
    DataType,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";

// Models
import Category from "./Category";
import User from "./User";

@Table({
    tableName: "products"
})

class Product extends Model {
    @ForeignKey(() => Category)
    declare categoryId: number

    @Column({
        type: DataType.STRING(150)
    })
    name: string

    @Column({
        type: DataType.STRING(10)
    })
    code: string

    @Column({
        type: DataType.DECIMAL
    })
    price: number

    @Column({
        type: DataType.STRING
    })
    image: string

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