import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from '@prisma/client';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get(':id')
  async getCountry(@Param('id') id: string): Promise<Country | null> {
    return this.countryService.findOrCreate(id);
  }
}
