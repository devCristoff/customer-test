import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { ConfigModule } from '@nestjs/config';
import { CountryModule } from './country/country.module';

@Module({
  imports: [ConfigModule.forRoot(), CustomersModule, CountryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
