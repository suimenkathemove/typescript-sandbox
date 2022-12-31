type T = Record<"foo" | "bar", string | number>;

const sample1 = { foo: "", bar: 0 } satisfies T;
// string
sample1.foo;
// number
sample1.bar;

const sample2: T = { foo: "", bar: 0 };
// string | number
sample2.foo;
// string | number
sample2.bar;
