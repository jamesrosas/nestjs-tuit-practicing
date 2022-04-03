import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../users/entities"

@Entity()
export class Tuit {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    content: string

    @ManyToOne(type => User, user => user.tuits, { cascade: true})
    @JoinColumn({name: "user_id"})
    user: User
    // de esta manera cda tuit tendra relacionado el user_id que lo creo
    // y gracias a cascade true tambien cuando se elimine dicho usuario tambien se eliminaran todos su tuits.

    // @Column()
    // test?: boolean
}