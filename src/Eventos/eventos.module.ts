import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { EventosService } from './eventos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './eventos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evento])],
  controllers: [EventosController],
  providers: [EventosService],
})


export class EventosModule {}


