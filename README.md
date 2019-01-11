# RustQL: tool for semantic querying of Rust code.

The tool consists of three parts:

1.  Extractor – a Rust compiler plugin that extracts the information
    about the crate during compilation.
2.  Linker – a program that merges the information about different
    crates into a single database.
3.  Query Engine – a program that takes a Datalog like query and
    evaluates it on the database.

## Extractor

Build the extractor and prepare the environment:

```bash
cd rustql-extractor
cargo build --release
source prepare_env.sh
```

Extract information about the crate and its dependencies by compiling
it:

```bash
cd <some-crate>
cargo clean
cargo build
```

This will emit information about the compiled crates at `~/.rustql/crates/`.

## Linker

To create the database, compile the linker and run it:

```bash
cd rustql-linker
cargo run --release
```

This will create a file `database.db` in the current directory.

## Query Engine

When you run a query engine, it will enter a loop in which you can
provide paths to queries to you want to execute:

```bash
cd ../rustql-query/
env RUST_BACKTRACE=1 cargo run --release
```

Example queries to try out:

```plain
samples/same_type.rql
samples/thief.rql
```
