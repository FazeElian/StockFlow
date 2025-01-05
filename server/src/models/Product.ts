import {
    Table,
    Column,
    Model,
    DataType,
} from "sequelize-typescript";

@Table({
    tableName: "products"
})

class Product extends Model {
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
}

export default Product;