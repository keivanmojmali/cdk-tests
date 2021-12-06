#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { MyPipelineStack } = require('../lib/my-pipeline-stack');

const app = new cdk.App();
new MyPipelineStack(app, 'MyPipelineStack', {
  env: {
    account: '098329158095',
    region: 'us-west-1',
  }
});

app.synth();