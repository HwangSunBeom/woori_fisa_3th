package dev.pool;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

public class Step04UsingHikariPool {

    public static void main(String[] args) throws SQLException {

        Connection connection = HikariCPDataSource.getConnection();

        System.out.println(connection);

    }

}
