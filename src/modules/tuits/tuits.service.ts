import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTuitDto, UpdateTuitDto } from './dto';
import { Tuit } from './tuit.entity';

@Injectable()
export class TuitsService {

    constructor(@InjectRepository(Tuit) private readonly tuitRepository: Repository<Tuit>){

    }

    async getTuits(): Promise<Tuit[]> {
        return await this.tuitRepository.find()
    }

    async getOneTuit(id: number): Promise<Tuit> {
        const tuit: Tuit = await this.tuitRepository.findOneBy({id})

        if(!tuit){
            throw new NotFoundException("Tuit not found")
        }

        return tuit
    }

    createTuit({content}: CreateTuitDto){
        const newTuit: Tuit = this.tuitRepository.create({ content })
        return this.tuitRepository.save(newTuit)
    }

    async updateTuit(id: number, {content}: UpdateTuitDto){
        const tuit: Tuit =  await this.tuitRepository.preload({
            id,
            content
        })

        if(!tuit){
            throw new NotFoundException("Tuit not found")
        }

        return this.tuitRepository.save(tuit)
    }

    async deleteTuit(id: number): Promise<void> {
        const tuit: Tuit = await this.tuitRepository.findOneBy({id})
        
        if(!tuit){
            throw new NotFoundException("Tuit doesn´t exist")
        }

        this.tuitRepository.remove(tuit)
    }


}
