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
}