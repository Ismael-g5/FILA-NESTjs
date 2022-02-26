import { Process } from '@nestjs/bull';
import { Job } from 'bull';

export class SendMailWithTweetsJob {
  @Process()
  handle(job: Job) {
    console.log(JSON.stringify(job.data));
  }
}
