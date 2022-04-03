import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTuitDto, UpdateTuitDto } from './dto';
import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {

    constructor(private readonly tuitsService: TuitsService){

    }

    @Get()
    getAllTuits(@Query() filterQuery): Promise<Tuit[]> {
        const { searchTerm, orderBy } = filterQuery
        return this.tuitsService.getTuits()
    }

    @Get(':id')
    getOneTuit(@Param('id') id: number): Promise<Tuit>{
        return this.tuitsService.getOneTuit(id)
    }

    @Post()
    createTuitt(@Body() content: CreateTuitDto): Promise<Tuit> {
        console.log(content instanceof CreateTuitDto)
        return this.tuitsService.createTuit(content)
    }

    @Patch(':id')
    updateTuit(@Param('id') id: number, @Body() content: UpdateTuitDto): Promise<Tuit> {
        return this.tuitsService.updateTuit(id, content)
    }

    @Delete(':id')
    deleteTuit(@Param('id') id: number): Promise<void> {
        return this.tuitsService.deleteTuit(id)
    }
}
