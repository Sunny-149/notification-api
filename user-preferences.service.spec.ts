import { Test, TestingModule } from '@nestjs/testing';
import { UserPreferencesService } from './user-preferences.service';
import { UserPreference } from './user-preference.model';

describe('UserPreferencesService', () => {
  let service: UserPreferencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPreferencesService],
    }).compile();

    service = module.get<UserPreferencesService>(UserPreferencesService);
  });

  it('should create a user preference', async () => {
    const newPreference: UserPreference = {
      userId: 'user123',
      email: 'user@example.com',
      preferences: {
        marketing: true,
        newsletter: false,
        updates: true,
        frequency: 'weekly',
        channels: {
          email: true,
          sms: false,
          push: true,
        },
      },
      timezone: 'America/New_York',
      lastUpdated: new Date(),
      createdAt: new Date(),
    };

    const createdPreference = await service.create(newPreference);
    expect(createdPreference).toEqual(expect.objectContaining(newPreference));
  });

  // Add other test cases for different functionalities of UserPreferencesService
});