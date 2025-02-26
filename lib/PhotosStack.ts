import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';

export class PhotosStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
   const myBucket= new Bucket(this, 'PhotosBucket2',{
         bucketName: 'photosbucket-234kgjgjffsanjeet5'
    });
    //if PhotosBucket2 as construct name/Logical ID
    //create new resource, and delete old one

    (myBucket.node.defaultChild as CfnBucket).overrideLogicalId('PhotosBucket234567');
  }
}