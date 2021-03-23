const test = require("ava");
const fs = require("fs");
const generator = require("../dist").default;

test("SQS Event", async (t) => {
  const body = fs.readFileSync("./test/payloads/sqs.json");
  const message = await generator.sqs.receiveMessage({
    accountId: 5555555,
    body: JSON.stringify(body.toJSON()),
  });
  t.is(message.Records[0].eventSource, "aws:sqs");
});

test("AWS Proxy", async (t) => {
  const message = await generator.apiGateway.awsProxy({
    stage: "dev",
  });
  t.is(message.requestContext.stage, "dev");
});
