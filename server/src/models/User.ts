import {
    Table,
    Column,
    Model,
    DataType,
    Default,
    Unique,
    AllowNull
} from "sequelize-typescript";

@Table({
    tableName: "users"
})

class User extends Model {
    @AllowNull(false)
    @Unique(true)
    @Column({
        type: DataType.STRING(50)
    })
    declare userName: string

    @AllowNull(false)
    @Unique(true)
    @Column({
        type: DataType.STRING(60)
    })
    declare email: string

    @AllowNull(false)
    @Column({
        type: DataType.STRING(60)
    })
    declare password: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(60)
    })
    declare name: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(60)
    })
    declare lastName: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(60)
    })
    declare profilePhoto: string

    @Column({
        type: DataType.STRING(6)
    })
    declare token: string

    @Default(false)
    @Column({
        type: DataType.BOOLEAN
    })
    declare confirmed: boolean
}

export default User;