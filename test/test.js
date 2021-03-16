const test = require("ava");
const fs = require("fs");
const generator = require("../dist").default;

test("Should return the event", async (t) => {
  const body = fs.readFileSync("./test/payloads/sqs.json");
  try {
    console.log(
      await generator.sqs.receiveMessage({
        accountId: 5555555,
        body,
      })
    );
    t.pass();
  } catch (error) {
    t.fail(error);
  }
});
