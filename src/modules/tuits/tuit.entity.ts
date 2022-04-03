import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Tuit {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    content: string

    // @Column()
    // test?: boolean
}