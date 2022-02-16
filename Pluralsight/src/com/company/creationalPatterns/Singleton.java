package com.company.creationalPatterns;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

//Initial code:
//public class Singleton {
//    private static Singleton instance = new Singleton();
//
//    private Singleton() {}
//
//    public static Singleton getInstance() {
//        return instance;
//    }
//}

//Lazy loading but not threadsafe:
//public class Singleton {
//    private static Singleton instance = null;
//
//    private Singleton() {}
//
//    public static Singleton getInstance() {
//        if (instance == null) {
//            instance = new Singleton();
//        }
//        return instance;
//    }
//}

//Lazy loading AND threadsafe
//public class Singleton {
//    //Volatile will ensure that the instance will remain a singleton through
//    // any of the changes inside the JVM.
//    private static Singleton instance = null;
//
//    private Singleton() {
//        //This piece of code is created to prevent a reflection class.
//        //It also creates an instance to where it's volatile and can't be reinstantiated.
//        if (instance != null) {
//            throw new RuntimeException("Use getInstance() method to create.");
//        }
//    }
//
//    public static Singleton getInstance() {
//        //Rather to synchronize on the whole method, check if instance == null,
//        //then synchronize on it
//        //This creates a double-checked locking mechanism and a synchronised check
//        if (instance == null) {
//            synchronized(Singleton.class) {
//                if (instance == null) {
//                    instance = new Singleton();
//
//                }
//            }
//        }
//        return instance;
//    }
//}


//Add a Derby database: a lightweight database to use for in memory apps
public class Singleton {
    private static Singleton instance = null;
    private static volatile Connection conn = null;

//    private Singleton() {
//        try {
//            DriverManager.registerDriver(new org.apache.derby.jdbc.EmbeddedDriver());
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//        if (instance != null) {
//            throw new RuntimeException("Use getInstance() method to create.");
//        }
//    }
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized(Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();

                }
            }
        }
        return instance;
    }

    public Connection getConnection() {
        if (conn == null) {
            synchronized (Singleton.class) {
                if (conn == null) {
                    try {
                        String SnUrl = "jdbc:derby:memory:codejava/webdb;create-true";
                        conn = DriverManager.getConnection(SnUrl);
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
        return conn;
    }
}
