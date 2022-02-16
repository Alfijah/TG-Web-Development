package com.company.creationalPatterns;

import java.sql.Connection;

public class SingletonDemo {
    //Initial main before the getConnection() method is made static
//    public static void main(String[] args) {
//        Singleton instance = Singleton.getInstance();
//        Singleton anotherInstance = Singleton.getInstance();
//
//        System.out.println(instance);
//        System.out.println(anotherInstance);
//    }

    //A way to make the getConnection() method static
    public static void main(String[] args) {
        Singleton instance = Singleton.getInstance();

        Connection conn = instance.getConnection();
    }
}
