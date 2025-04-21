import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Country } from '@prisma/client';
import axios from 'axios';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService, private configService: ConfigService) {}

  async findOrCreate(id: string): Promise<Country | null> {
    let country = await this.prisma.country.findUnique({
      where: { id }
    });
  
    if (!country) {
      const response = await axios.get(`${this.configService.get<string>('COUNTRY_BASE_URL')}/v3.1/alpha/${id}`);
      const _country = response.data[0];
  
      country = await this.prisma.country.create({
        data: {
          id: id,
          name: _country.name.official,
          demonym: _country.demonyms.eng.m
        }
      });
    }
  
    return country;
  }
}
