import type { ProductCatalog } from "./product-catalog.mjs";

export function skillReferenceIssues(
  skillRoot: string,
): Promise<readonly string[]>;

/** Literal tool counts in living prose, which the catalog owns. */
export function literalToolCountIssues(
  root: string,
): Promise<readonly string[]>;

export function documentationFactIssues(
  root: string,
  catalog: ProductCatalog,
): Promise<readonly string[]>;
export function assertDocumentationFacts(
  root: string,
  catalog: ProductCatalog,
): Promise<void>;
