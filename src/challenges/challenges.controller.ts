import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { ChallengesService } from './challenges.service';
import { Challenge } from './interfaces/challenge.interface';

@Controller('challenges') //need proper services
export class ChallengesController {
  constructor(private readonly challengesService: ChallengesService) {}
  @Get() //get all challenges
  async findAll(): Promise<Challenge[]> {
    return this.challengesService.findAll();
  }

  @Get(':id') //get challenge by id
  async findOne(@Param('id') id): Promise<Challenge> {
    return this.challengesService.findOne(id);
  }

  @Post() //update
  create(@Body() createChallengeDto: CreateChallengeDto): string {
    return `Name ${createChallengeDto} Desc: ${createChallengeDto.description}`;
  }

  @Delete(':id') //delete
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id') //update by id
  update(
    @Body() updateChallengeDto: CreateChallengeDto,
    @Param('id') id,
  ): string {
    return `Update ${id} - Name: ${updateChallengeDto.name}`;
  }
}
