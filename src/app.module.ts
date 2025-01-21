import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChallengesController } from './challenges/challenges.controller';
import { ChallengesService } from './challenges/challenges.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChallengesModule } from './challenges/challenges.module';
import config from './config/keys'

@Module({
  imports: [ChallengesModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, ChallengesController],
  providers: [AppService, ChallengesService],
})
export class AppModule {}
