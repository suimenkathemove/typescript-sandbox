type Phantom1<K extends string, V> = V & Record<K, never>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Phantom2<K extends string, V> = V & { __type: K };

type Id = Phantom1<"id", string>;
const id: Id = "id" as Id;
const fn = (_id: Id) => {};

// ok
fn(id);

// error
// fn("id");
