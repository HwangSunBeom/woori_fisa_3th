package dev.pool;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Step01UsingDriverManager {

    public static void main(String[] args) throws SQLException {
        final String URL = "jdbc:mysql://localhost:3306/";
        final String DATABASE_NAME = "testdb";
        final String USER = "root";
        final String PASSWORD = "132465";

        Connection connection1 = DriverManager.getConnection(URL + DATABASE_NAME, USER, PASSWORD);
        Connection connection2 = DriverManager.getConnection(URL + DATABASE_NAME, USER, PASSWORD);

        System.out.println(connection1);
        System.out.println(connection2);

        while (true) {}


    }

}
