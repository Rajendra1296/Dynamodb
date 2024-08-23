# local stack install

docker pull localstack/localstack  
docker run --rm -p 4566:4566 localstack/localstack

# aws config

aws configure  
npm install express aws-sdk body-parser

docker run -p 8000:8000 amazon/dynamodb-local

# create table

aws --endpoint-url=http://localhost:4566 dynamodb create-table \
 --table-name MyTable \
 --attribute-definitions \
 AttributeName=id,AttributeType=S \
 --key-schema \
 AttributeName=id,KeyType=HASH \
 --provisioned-throughput \
 ReadCapacityUnits=5,WriteCapacityUnits=5

# for v3 sdk

npm install @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb

# for processs env

npm install dotenv

# class vaildator

yarn add aws-sdk @aws-sdk/client-dynamodb class-validator uuid

# decribe a created table

aws --endpoint-url=http://localhost:4566 dynamodb describe-table --table-name Books

# list tables created

aws dynamodb list-tables --endpoint-url http://localhost:4566

# create table by creating a /.json file in src

aws dynamodb create-table --cli-input-json file://table-script.json --endpoint-url http://localhost:8000

# to view tables online

Neha Patlolla Rajendra Venigalla

Useful Localstack Commands (local environment)

-- Dynamodb admin
to install it use below command
$ npm i -g dynamodb-admin

to run it update endpoint and region details on which your dynamodb running and execute it
$ DYNAMO_ENDPOINT=http://localhost:4567 AWS_REGION=localhost dynamodb-admin
to view dynamodb tables use http://localhost:8001/

-- SQS admin
to install it use below command
$ npm i -g sqs-admin

to run it update endpoint and region details on which your sqs running and execute it
$ SQS_ENDPOINT=http://localhost:4566 AWS_REGION=us-east-1 sqs-admin -p 8002

to view SQS queues use http://localhost:8002
