import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from './eventos.entity';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private eventoRepository: Repository<Evento>,
  ) {}

  // Método para obter todos os eventos
  async getAllEventos(): Promise<Evento[]> {
    return this.eventoRepository.find();
  }

  // Método para criar um novo evento
  async create(evento: Evento): Promise<Evento> {
    return this.eventoRepository.save(evento);
  }
}
