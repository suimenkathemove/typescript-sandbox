// eslint-disable-next-line @typescript-eslint/ban-types
type Foo = "foo" | (string & {});
// type Foo = "foo" | (string & NonNullable<unknown>);

// "foo"が補完される
const _foo: Foo = "foo";
// 他の文字列でもOK
const _foo2: Foo = "bar";
