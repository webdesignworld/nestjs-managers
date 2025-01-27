
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'MY_SECRET_KEY', 
      signOptions: { expiresIn: '1d' },
    }),
  ],
  exports: [JwtModule],
})
export class AuthModule {}

