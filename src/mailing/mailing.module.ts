import { Module } from '@nestjs/common';
import { SendMailWithTweetsJob } from './send-mail-with-tweetsa.jobs';

@Module({
  providers: [SendMailWithTweetsJob],
})
export class MailingModule {}
