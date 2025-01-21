import { Injectable } from '@nestjs/common';
import { Challenge } from './interfaces/challenge.interface'; // for TS
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable() //from the controller nest g controller challenges
export class ChallengesService {
constructor(@InjectModel('Challenge') private readonly challengesModel: Model<Challenge>){

}

async findAll(): Promise<Challenge[]> {
  return await this.challengesModel.find();   
}

async findOne(id: string): Promise<Challenge  | null>{
    return  await this.challengesModel.findOne({_id: id})
}
}
