import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserPreferenceSchema } from './user-preferences/user-preference.model';
import { UserPreferencesService } from './user-preferences/user-preferences.service';
import { NotificationLogSchema } from './notification-logs/notification-log.model';
import { NotificationLogsService } from './notification-logs/notification-logs.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/notification-api'),
    MongooseModule.forFeature([
      { name: 'UserPreference', schema: UserPreferenceSchema },
      { name: 'NotificationLog', schema: NotificationLogSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, UserPreferencesService, NotificationLogsService],
})
export class AppModule {}