type T = Record<"foo" | "bar", string | number>;

const sample1: T = { foo: "", bar: 0 };
// string | number
sample1.foo;
// string | number
sample1.bar;

const sample2 = { foo: "", bar: 0 } satisfies T;
// string
sample2.foo;
// number
sample2.bar;

const sample3 = { foo: "", bar: 0 } as const satisfies T;
// ""
sample3.foo;
// 0
sample3.bar;
