import { strict as assert } from "node:assert";
import { test } from "node:test";
import { sum } from "./index.js";

test("mengembalikan hasil penjumlahan dua angka", () => {
  assert.equal(sum(1, 2), 3);
  assert.equal(sum(-1, 1), 0);
  assert.equal(sum(0, 0), 0);
  assert.equal(sum(2.5, 2.5), 5);
});

test("mengembalikan hasil penjumlahan angka dengan string", () => {
  assert.equal(sum(1, "2"), "12"); // Konversi tipe
  assert.equal(sum("5", 5), "55");
});
