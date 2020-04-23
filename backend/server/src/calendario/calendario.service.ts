import { Injectable } from '@nestjs/common';

@Injectable()
export class CalendarioService {


    mostrarCalendario(){
        return 'service mostrar calendario'
    }
}
