import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventosModule } from './eventos/eventos.module'; // Ajuste o caminho conforme a estrutura do seu projeto
import { ProdutosModule } from './Produtos/produtos.module'; // Ajuste o caminho conforme a estrutura do seu projeto

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // tipo do banco de dados
      host: 'localhost', // host do banco de dados
      port: 5432, // porta padrão do PostgreSQL
      username: 'postgres', // substitua pelo seu usuário do banco de dados
      password: 'admin', // substitua pela sua senha do banco de dados
      database: 'Ecommerce_Main', // banco de dados
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // busca as entidades
      synchronize: true, // sincroniza o banco de dados com as entidades 
    }),
    EventosModule, // Adicionando o módulo de eventos
    ProdutosModule,
  ],

  
})
export class AppModule {}




