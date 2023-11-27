import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sns from 'aws-cdk-lib/aws-sns';

export class SNSStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const topic = new sns.Topic(this, 'FIFOTopic', {
      displayName: 'topic.fifo',
      fifo: true,
      contentBasedDeduplication: true,
    });
  }
}
