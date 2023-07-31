#![allow(dead_code, unused_macros, unused_variables, unused_mut, unused_imports)]

// Namespace/module.
use std::io;

// User type.
struct MyType {
    // Field, built-in type.
    field_1: i32, field_2: i32
}

// Interface or interface-like.
trait MyTrait {
    // Member function.
    fn member_function(self, x: i32, y: i32);
    // Static function.
    fn static_function(x: i32, y: i32);
}

// Derive (Rust only), attributes
#[derive(Debug)] #[deprecated]
// Enumeration and members.
enum MyEnum { MemberA, MemberB }

// Macros.
macro_rules! my_macro {
    () => {}
}

// Lifetime (Rust only), type parameters.
fn foo<'life, TParam>() {
    // Normal variable.
    let variable = String::new();
    // Mutable variable (underline, Rust only).
    let mut variable = String::new();
    // Consuming (bold, Rust only).
    _ = String::from(variable);

    // Deprecated, warning.
    let deprecated = MyEnum::MemberA;
    // Error.
    let error: String = "...";

    // Boolean and numeric constants.
    let boolean = true;
    let number = 0xFFFF;

    // String constant.
    let string = "my string\r\n";
}
