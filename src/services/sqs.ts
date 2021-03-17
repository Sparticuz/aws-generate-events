import execute from "../spawn";

export interface sqsOptions {
  accountId: string;
  body: string;
  partition: string;
  queueName: string;
  region: string;
}

const receiveMessage = async (options?: sqsOptions): Promise<string> => {
  const callArguments = [
    "sqs",
    "receive-message"
  ];
  if(options?.accountId) {
    callArguments.push("--account-id", options.accountId);
  }
  if(options?.body) {
    callArguments.push("--body", options.body);
  }
  if(options?.partition) {
    callArguments.push("--partition", options.partition);
  }
  if(options?.queueName) {
    callArguments.push("--queue-name", options.queueName);
  }
  if(options?.region) {
    callArguments.push("--region", options.region);
  }

  return execute(callArguments);
};

export default {
  receiveMessage,
};
