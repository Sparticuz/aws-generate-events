import execute from "../spawn.js";

export interface s3Options {
  bucket?: string;
  key?: string;
  partition?: string;
  region?: string;
}

const put = async (options?: s3Options): Promise<AWSLambda.S3Event> => {
  const callArguments = ["s3", "put"];
  if (options?.bucket) {
    callArguments.push("--bucket", options.bucket);
  }
  if (options?.key) {
    callArguments.push("--key", options.key);
  }
  if (options?.partition) {
    callArguments.push("--partition", options.partition);
  }
  if (options?.region) {
    callArguments.push("--region", options.region);
  }

  return JSON.parse(await execute(callArguments)) as AWSLambda.S3Event;
};

const del = async (options?: s3Options): Promise<AWSLambda.S3Event> => {
  const callArguments = ["s3", "delete"];
  if (options?.bucket) {
    callArguments.push("--bucket", options.bucket);
  }
  if (options?.key) {
    callArguments.push("--key", options.key);
  }
  if (options?.partition) {
    callArguments.push("--partition", options.partition);
  }
  if (options?.region) {
    callArguments.push("--region", options.region);
  }

  return JSON.parse(await execute(callArguments)) as AWSLambda.S3Event;
};

export default {
  delete: del,
  put,
};
