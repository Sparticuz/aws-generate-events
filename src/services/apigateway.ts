import execute from "../spawn.js";

export interface awsProxy {
  accountId?: string;
  body?: string;
  dnsSuffix?: string;
  method?: string;
  path?: string;
  resource?: string;
  stage?: string;
}

const awsProxy = async (
  options?: awsProxy
): Promise<AWSLambda.APIGatewayProxyEvent> => {
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
  if (options?.resource) {
    callArguments.push("--resource", options.resource);
  }
  if (options?.stage) {
    callArguments.push("--stage", options.stage);
  }

  const response = JSON.parse(
    await execute(callArguments)
  ) as AWSLambda.APIGatewayProxyEvent;

  // Unescape response.body
  if (response.body) {
    if (response.isBase64Encoded) {
      response.body = Buffer.from(
        Buffer.from(response.body, "base64").toString().replaceAll("\\", "")
      ).toString("base64");
    }
    response.body = response.body.replaceAll("\\", "");
  }

  return response;
};

export default {
  awsProxy,
};
