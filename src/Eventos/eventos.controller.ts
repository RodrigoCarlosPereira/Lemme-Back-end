import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { Evento } from './eventos.entity';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Get()
  async getEventos() {
    return this.eventosService.getAllEventos();
  }

  @Post()
  async create(@Body() evento: Evento): Promise<Evento> {
    console.log(evento);
    return await this.eventosService.create(evento);
  }
}


