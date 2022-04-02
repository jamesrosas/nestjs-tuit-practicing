import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
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
    createTuitt(@Body('content') content: string): void {
        return this.tuitsService.createTuit(content)
    }

    @Patch(':id')
    updateTuit(@Param('id') id: string, @Body() params): Tuit {
        return this.tuitsService.updateTuit(id, params.content)
    }

    @Delete(':id')
    deleteTuit(@Param('id') id: string):void {
        return this.tuitsService.deleteTuit(id)
    }
}
