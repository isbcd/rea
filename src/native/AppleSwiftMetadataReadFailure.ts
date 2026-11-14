import { parseFailureFromCause } from "../domain/parseFailure.js";
/**
 * Expected format-boundary failures from bounded Swift metadata reads. A host
 * stack or capacity failure is not one: it says nothing about the metadata.
 */
export const expectedSwiftMetadataReadFailure = (
  cause: unknown,
): string | null => {
  const failure = parseFailureFromCause(cause, "macho");
  if (failure !== undefined) return failure.message;
  if (
    cause instanceof TypeError &&
    "code" in cause &&
    cause.code === "ERR_ENCODING_INVALID_ENCODED_DATA"
  )
    return cause.message;
  return null;
};
