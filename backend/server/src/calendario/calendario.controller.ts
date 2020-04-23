import { Controller, Get } from '@nestjs/common';
import { CalendarioService } from './calendario.service';

@Controller('calendario')
export class CalendarioController {

    constructor(private calendarioService:CalendarioService = new CalendarioService()){}

    @Get()
    showCalendario(){
        return this.calendarioService.mostrarCalendario()
    }
}
