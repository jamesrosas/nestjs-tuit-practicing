import { Injectable, NotFoundException } from '@nestjs/common';
import { Tuit } from './tuit.entity';

@Injectable()
export class TuitsService {

    private tuits: Tuit[] = [
        {
            id: "1",
            content: "is this the first tuit 🧐"
        }
    ]

    getTuits(): Tuit[] {
        return this.tuits
    }

    getOneTuit(id: string): Tuit{
        const tuit = this.tuits.find( item => item.id === id )

        if(!tuit){
            throw new NotFoundException("Tuit not found")
        }

        return tuit
    }

    createTuit(content: string){
        const random = (Math.floor(Math.random() * 1000) + 1).toString()
        this.tuits.push({
            id: random,
            content
        })
    }

    updateTuit(id: string, content: string){
        const tuit: Tuit = this.getOneTuit(id)
        tuit.content = content
        return tuit
    }

    deleteTuit(id: string){
        const tuitIndex = this.tuits.findIndex( (item) => item.id === id)
        if(tuitIndex >= 0){
            this.tuits.splice(tuitIndex, 1)
        }
    }


}
