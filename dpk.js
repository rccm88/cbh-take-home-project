const crypto = require("crypto");

const createPartitionKey = (element) => {
  return crypto.createHash('sha3-512').update(element).digest('hex');
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) return TRIVIAL_PARTITION_KEY;

  let candidate = event.partitionKey || createPartitionKey(JSON.stringify(event));

  candidate = typeof candidate === 'string' ? candidate : JSON.stringify(candidate);

  candidate = candidate.length > MAX_PARTITION_KEY_LENGTH ? createPartitionKey(candidate) : candidate;

  return candidate;
};