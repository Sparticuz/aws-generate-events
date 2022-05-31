# aws-generate-events

A very simple wrapper for [AWS SAM](https://github.com/aws/aws-sam-cli)'s `local generate-event` which will let you generate events in nodejs for testing purposes. This package will let you easily test your Lambda handlers using a testing framework like ava.js.

__Note__: Application Logic should probably _not_ be in your Lambda handler, and your functions should probably be tested outside of using the handler, but for small applications this might just be easier.

## Dependencies
* [AWS SAM](https://github.com/aws/aws-sam-cli)

## Installation
1. Install SAM:
    * Download [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
2. Install aws-generate-events:
    ```
    npm install --save-dev aws-generate-events
    ```

## Usage

Basic
```
const generator = require("aws-generate-events").default;

await generator.sqs.receiveMessage({
  accountId: 5555555,
  body: "This is a test!",
});
```

Getting the body of a json file as the body
```
const fs = require("fs");
const generator = require("aws-generate-events").default;

const body = fs.readFileSync("./test/payloads/sqs.json");
await generator.sqs.receiveMessage({
  accountId: 5555555,
  body: JSON.stringify(body.toJSON()),
});
```
Usage Example
```
const generator = require("aws-generate-events").default;
const lambdaHandler = require("../dist/handler");

const event = await generator.sqs.receiveMessage({
  accountId: 5555555,
  body: "This is a test!",
});

lambdaHandler(event);
```

## Progress
Below are all the commands from `sam local generate-event`, as well as what is implemented. If you would like to add an event, please check out `src/services/sqs.ts` for an example, and create a pull request.
- [ ] alexa-skills-kit
  - [ ] end-session
  - [ ] intent-answer
  - [ ] intent-getnewfact
  - [ ] intent-mycoloris
  - [ ] intent-recipe
  - [ ] start-session
- [ ] alexa-smart-home
  - [ ] smart-home-control-turn-off-request
  - [ ] smart-home-control-turn-on-request
  - [ ] smart-home-discovery-request
- [ ] apigateway
  - [ ] authorizer
  - [x] aws-proxy (v1.0.0)
- [ ] appsync
  - [ ] resolver
- [ ] batch
  - [ ] get-job
  - [ ] submit-job
- [ ] cloudformation
  - [ ] create-request
- [ ] cloudfront
  - [ ] ab-test
  - [ ] access-request-in-response
  - [ ] http-redirect
  - [ ] modify-querystring
  - [ ] modify-response-header
  - [ ] multiple-remote-calls-aggregate-response
  - [ ] normalize-querystring-to-improve-cache-hit
  - [ ] redirect-on-viewer-country
  - [ ] redirect-unauthenticated-users
  - [ ] response-generation
  - [ ] serve-object-on-viewer-device
  - [ ] simple-remote-call
- [ ] cloudwatch
  - [ ] logs
  - [ ] scheduled-event
- [ ] codecommit
  - [ ] repository
- [ ] codepipeline
  - [ ] job
- [ ] cognito
  - [ ] sync-trigger
- [ ] config
  - [ ] item-change-notification
  - [ ] oversized-item-change-notification
  - [ ] periodic-rule
- [ ] connect
  - [ ] contact-flow-event
- [ ] dynamodb
  - [ ] update
- [ ] kinesis
  - [ ] analytics
  - [ ] analytics-compressed
  - [ ] analytics-dynamodb
  - [ ] analytics-kpl
  - [ ] apachelog
  - [ ] cloudwatch-logs-processor
  - [ ] get-records
  - [ ] kinesis-firehose
  - [ ] streams-as-source
  - [ ] syslog
- [ ] lex
  - [ ] book-car
  - [ ] book-hotel
  - [ ] make-appointment
  - [ ] order-flowers
- [ ] rekognition
  - [ ] s3-request
- [ ] s3
  - [x] delete
  - [x] put
- [ ] sagemaker
  - [ ] ground-truth-annotation-consolidation
  - [ ] ground-truth-pre-human
- [ ] ses
  - [ ] email-receiving
- [ ] sns
  - [ ] notification
- [x] sqs
  - [x] receive-message (v0.0.1)
- [ ] stepfunctions
  - [ ] error

## Meta

Maintained by [Kyle McNally](http://www.github.com/Sparticuz)


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Sparticuz/aws-generate-events.


## License

The npm package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
