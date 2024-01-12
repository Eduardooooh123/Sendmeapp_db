import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';


@Controller('mensajes')
export class MensajesController {
    @Post()
    create (@Body() createMensajeDto:CreateMensajeDto){
        return 'Mensaje creado';

    }
    @Get()
    getAll(){
        return ' Lista de mensajes';
    }
    @Put(':Id')
    update(@Body() updateMEnsajeDto:CreateMensajeDto){ 
        return 'Mensaje Actualizado'
        
    }
    @Delete(':Id')
    delete(){
        return "mensaje eliminado"

    }
}
