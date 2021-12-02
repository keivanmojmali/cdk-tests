import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

      //defines an api resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      //execution enviroment
      runtime: lambda.Runtime.NODEJS_14_X,
      //code loaded from 'lambda' directory
      code: lambda.Code.fromAsset('lambda'),
      //file is "hello", function is "handler"
      handler:'hello.handler'
    })

    //defines an API Gateway API resource backed b y our "hello" function.
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello
    })
  }
}
