import s3 from "./services/s3.js";
import sqs from "./services/sqs.js";
import apiGateway from "./services/apigateway.js";

export default {
  apiGateway,
  s3,
  sqs,
};
