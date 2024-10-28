import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('produto')
export class Produto {
  @PrimaryGeneratedColumn()
  produto_id: number;

  @Column({ length: 100 })
  nome_produto: string;

  @Column({ length: 100 })
  descricao_produto: string;

  @Column({ type: 'money' })
  preco_produto: number;

  @Column({ length: 100 })
  categoria_produto : string;

  @Column({ type: 'text', nullable: false }) // Usando o tipo 'text' para o caminho da imagem
  imagem: string;
  
}

export default Produto;
