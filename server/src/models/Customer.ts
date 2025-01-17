import {
    Table,
    Column,
    Model,
    DataType,
    BelongsTo,
    ForeignKey,
    AllowNull,
} from "sequelize-typescript";

// Models
import User from "./User";

@Table({
    tableName: "customers"
})

class Customer extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING(150)
    })
    declare name: string

    @Column({
        type: DataType.STRING
    })
    declare description: string

    @ForeignKey(() => User)
    declare userId : number

    @BelongsTo(() => User)
    declare user : User
}

export default Customer;