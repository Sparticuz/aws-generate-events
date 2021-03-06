import type { APIGatewayProxyEvent } from "aws-lambda";
import execute from "../spawn";

export interface awsProxy {
  accountId: string;
  body: string;
  dnsSuffix: string;
  method: string;
  path: string;
  region: string;
  resource: string;
  stage: string;
}

const awsProxy = async (options?: awsProxy): Promise<APIGatewayProxyEvent> => {
  const callArguments = ["apigateway", "aws-proxy"];
  if (options?.accountId) {
    callArguments.push("--account-id", options.accountId);
  }
  if (options?.body) {
    // We need to escape any double quotes
    callArguments.push(
      "--body",
      options.body.replace(/\\([\S\s])|(")/g, "\\$1$2")
    );
  }
  if (options?.dnsSuffix) {
    callArguments.push("--dns-suffix", options.dnsSuffix);
  }
  if (options?.method) {
    callArguments.push("--method", options.method);
  }
  if (options?.path) {
    callArguments.push("--path", options.path);
  }
  if (options?.region) {
    callArguments.push("--region", options.region);
  }
  if (options?.resource) {
    callArguments.push("--resource", options.resource);
  }
  if (options?.stage) {
    callArguments.push("--stage", options.stage);
  }

  return JSON.parse(await execute(callArguments)) as APIGatewayProxyEvent;
};

export default {
  awsProxy,
};
