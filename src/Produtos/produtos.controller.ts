import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produto } from './produtos.entity';
import { Response } from 'express';
import { join } from 'path';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  async getProdutos() {
    return this.produtosService.getAllProdutos();
  }

  @Post()
  async create(@Body() produto: Produto): Promise<Produto> {
    console.log(produto);
    return await this.produtosService.create(produto);
  }

  @Get('imagens/:imagemPath')
  findImagem(@Param('imagemPath') imagemPath: string, @Res() res: Response) {
      const imagePath = join(__dirname, '..', 'public', 'imagens', imagemPath);
      console.log("Caminho da imagem:", imagePath); // Debug
      return res.sendFile(imagePath, (err) => {
        if (err) {
          console.error("Erro ao enviar o arquivo:", err);
          return res.status(404).send('Imagem não encontrada');
        }
      });
  }
  
}

