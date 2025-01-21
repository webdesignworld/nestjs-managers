import { Module } from '@nestjs/common';
import { ChallengesController } from './challenges.controller';
import { ChallengesService } from './challenges.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ManagerSchema } from './schemas/manager.schema';
import { ChallengeSchema } from './schemas/challenge.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Challenge', schema: ChallengeSchema },
      { name: 'Manager', schema: ManagerSchema },
    ]),
  ],
  controllers: [ChallengesController],
  providers: [ChallengesService],
})
export class ChallengesModule {}
