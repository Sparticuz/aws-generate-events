# aws-generate-events

A very simple wrapper for [AWS SAM](https://github.com/aws/aws-sam-cli) which will let you generate events in nodejs for testing purposes. This package will let you easily test your Lambda handlers using a testing framework like ava.js.

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
  body,
});
```

## Meta

Maintained by [Kyle McNally](http://www.github.com/Sparticuz)


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Sparticuz/aws-generate-events.


## License

The npm package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
