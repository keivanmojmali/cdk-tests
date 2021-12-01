const cdk = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');
// const sqs = require('@aws-cdk/aws-sqs');

class HelloCdkStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HelloCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    new s3.Bucket(this, "MyFirstBucket", {
      versioned: true
    });

  }
}

module.exports = { HelloCdkStack }
