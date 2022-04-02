import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTuitDto, UpdateTuitDto } from './dto';
import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {

    constructor(private readonly tuitsService: TuitsService){

    }

    @Get()
    getAllTuits(@Query() filterQuery): Tuit[] {
        const { searchTerm, orderBy } = filterQuery
        return this.tuitsService.getTuits()
    }

    @Get(':id')
    getOneTuit(@Param('id') id: string): Tuit{
        return this.tuitsService.getOneTuit(id)
    }

    @Post()
    createTuitt(@Body() content: CreateTuitDto): void {
        console.log(content instanceof CreateTuitDto)
        return this.tuitsService.createTuit(content)
    }

    @Patch(':id')
    updateTuit(@Param('id') id: string, @Body() content: UpdateTuitDto): Tuit {
        return this.tuitsService.updateTuit(id, content)
    }

    @Delete(':id')
    deleteTuit(@Param('id') id: string):void {
        return this.tuitsService.deleteTuit(id)
    }
}
