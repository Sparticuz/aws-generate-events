import { spawn } from "node:child_process";

export default (callArguments: string[]): Promise<string> => {
  return new Promise((resolve, reject) => {
    const process = spawn("sam", ["local", "generate-event", ...callArguments]);
    const stdout: string[] = [];
    const stderr: string[] = [];
    process.stdout.on("data", (data) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      stdout.push(data);
    });
    process.stderr.on("data", (data) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      stderr.push(data);
    });
    process.addListener("error", reject);
    process.on("close", (code) => {
      if (code === 0) {
        resolve(stdout.join(","));
      } else {
        reject(stderr.join(","));
      }
    });
  });
};
