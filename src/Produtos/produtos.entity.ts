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

  @Column({ length: 100})
  produto_categoria : string;

  @Column("text", { array: true})
  produto_tamanhos : string[];

  @Column("text", { array: true})
  produto_cores : string[];

  @Column({length: 255}) // Usando o tipo 'text' para o caminho da imagem
  produto_imagens: string;
  
}

export default Produto;
