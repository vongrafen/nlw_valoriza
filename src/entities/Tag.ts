import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { Expose } from "class-transformer"
import { v4 as uuid } from "uuid"

@Entity("tags")

class Tag {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @Expose({ name: "custom_name" })
    nameCustom(): string {
        return `#${this.name}`;
    }

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Tag };
