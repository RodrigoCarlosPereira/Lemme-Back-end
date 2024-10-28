import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('evento')
export class Evento {
  @PrimaryGeneratedColumn()
  evento_id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  local: string;

  @Column({ type: 'date', nullable: false })
  data: Date;

  @Column({ type: 'time', nullable: false })
  hora: string;

  @Column({ length: 100 })
  descricao: string;

  @Column({ type: 'money' })
  taxaevento: number;
}

