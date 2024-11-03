import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './produtos.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async getAllProdutos(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async create(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }
  async getProdutoById(produto_id: number): Promise<Produto> {
    // Corrigir aqui: usar findOneBy em vez de findOne para buscar pelo ID
    return await this.produtoRepository.findOneBy({ produto_id });
  }
}