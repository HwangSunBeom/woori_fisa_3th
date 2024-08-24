package dev.pool;

import javax.sql.ConnectionPoolDataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

public class Step03UsingMyConnectionPool {

    public static void main(String[] args) throws SQLException {
        final String URL = "jdbc:mysql://localhost:3306/";
        final String DATABASE_NAME = "testdb";
        final String USER = "root";
        final String PASSWORD = "132465";

        // 1. 커넥션 풀 생성 - 커넥션 객체를 생성하는 것이 아닌, 커넥션 '풀' 객체를 생성하는 것
        MyConnectionPool.create(URL + DATABASE_NAME, USER, PASSWORD);

        // 2. 커넥션 풀 객체를 통해서 getConnection()으로 커넥션 객체 획득
        Connection connection1 = MyConnectionPool.getConnection();
        Connection connection2 = MyConnectionPool.getConnection();

        System.out.println(connection1);
        System.out.println(connection2);

        // 3. DB 입출력 처리(는 했다고 가정)

        // 4. 입출력 처리 후 relaseConnection(반납할 커넥션 객체)으로 커넥션 객체를 커넥션 풀에 반납
        MyConnectionPool.releaseConnection(connection1); // connection1 객체 반납

        // 5. 프로그램이 완전하게 종료될 때(shutdown) shutdown() 호출
        // -> 커넥션 풀에 있는 모든 커넥션 객체 닫기(close())
        MyConnectionPool.shutdown(); // 모든 커넥션 객체를 close 하는 처리 수행

    }

}
