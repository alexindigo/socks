import { add } from '@socks/socks';
import { assertEquals } from '@std/assert';

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});
