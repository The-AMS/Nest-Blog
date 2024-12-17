import { Module, Post } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { PostgresProvider } from './postgres/postgres.provider';

@Module({
  providers: [
    DatabaseService,
    {
      provide:'DATABASE_CONNECTION',
      useFactory:async()=>{
        if (!PostgresProvider.isInitialized){
          await PostgresProvider.initialize();
        }
        return PostgresProvider;
      }
    }
  ],
  exports: ['DATABASE_CONNECTION']
})
export class DatabaseModule {}
