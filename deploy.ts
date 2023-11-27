import { App } from 'aws-cdk-lib';
import { SNSStack } from './sns';

async function build() {
  const app = new App();
  const props = () => ({
    env: { account: '000000000000', region: 'us-west-2' },
  });

  const sns = new SNSStack(app, 'SNSStack', props());
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
