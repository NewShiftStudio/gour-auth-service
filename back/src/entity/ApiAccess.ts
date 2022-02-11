import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, Index} from "typeorm";
import {AppEntity} from "./AppEntity";

@Entity()
export class ApiAccess extends AppEntity {
    @Index({
        unique: true
    })
    @Column()
    key: string;

    @Column({
        nullable: true
    })
    description: string;
}