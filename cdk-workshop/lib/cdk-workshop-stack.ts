import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      //execution enviroment
      code: lambda.Code.fromAsset('lambda'),
      //code loaded from "lambda" directory
      handler: 'hello.handler'
      //file is "hellno", function is 
    })

  }
}