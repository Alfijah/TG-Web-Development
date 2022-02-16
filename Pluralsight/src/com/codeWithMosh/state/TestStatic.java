package com.codeWithMosh.state;

public class TestStatic {
    private static TestStatic obj;

    private TestStatic() {
        System.out.println("Test static");
    }

    public static TestStatic getObj() {
        return obj;
    };
}
