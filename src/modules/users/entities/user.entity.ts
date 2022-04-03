import { Tuit } from "src/modules/tuits/tuit.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({nullable: false})
    name: string

    @Column({nullable: false})
    email: string

    @Column({nullable: false})
    userName: string

    @Column({nullable: false})
    password: string

    @OneToMany( type => Tuit, tuit => tuit.user)
    tuits: Tuit[]

    @CreateDateColumn()
    createdAt : Date

    @UpdateDateColumn()
    updatedAt: Date
}