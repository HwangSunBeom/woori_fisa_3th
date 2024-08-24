package dev.pool;

import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Step02UsingDataSource {


    public static void main(String[] args) throws SQLException {
        final String URL = "jdbc:mysql://localhost:3306/";
        final String DATABASE_NAME = "testdb";
        final String USER = "root";
        final String PASSWORD = "132465";

        DataSource datasource = new DriverManagerDataSource(URL + DATABASE_NAME, USER, PASSWORD);

        System.out.println(datasource);

        Connection connection1 = datasource.getConnection();
        Connection connection2 = datasource.getConnection();

        System.out.println(connection1);
        System.out.println(connection2);



    }

}
