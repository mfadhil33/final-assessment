import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("sum adds two positive numbers correctly", () => {
  assert.strictEqual(sum(2, 3), 5);
});

test("sum returns 0 when one of the arguments is negative", () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(3, -2), 0);
  assert.strictEqual(sum(-1, -1), 0);
});

test("sum returns 0 when one of the arguments is not a number", () => {
  assert.strictEqual(sum("2", 3), 0);
  assert.strictEqual(sum(2, "3"), 0);
  assert.strictEqual(sum("a", "b"), 0);
});

test("sum returns 0 when both arguments are not numbers", () => {
  assert.strictEqual(sum("a", "b"), 0);
});

test("sum returns correct result for large numbers", () => {
  assert.strictEqual(sum(1e6, 1e6), 2e6);
});
