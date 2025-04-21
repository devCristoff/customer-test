import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { PrismaService } from 'src/prisma.service';
import { CountryController } from './country.controller';
import { ConfigService } from '@nestjs/config';

@Module({
    controllers: [CountryController],
    providers: [CountryService, PrismaService, ConfigService]
})
export class CountryModule {}
