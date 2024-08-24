package dev.pool;

import java.sql.Connection;
import java.sql.SQLException;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

// HikariCP 커넥션 풀 생성 및 설정용 클래스
public class HikariCPDataSource {

    private static HikariConfig config = new HikariConfig();
    private static HikariDataSource datasource;

    // static 블럭
    static {
        // DB 설정 옵션들 세팅하는 부분
        System.out.println("Creating Hikari CP..");

        // 필수 설정해야하는 파라미터(URL, USERNAME, PASSWORD)
        config.setJdbcUrl("jdbc:mysql://localhost:3306/testdb"); // DB이름은 URL뒤에 추가하여 기술
        config.setUsername("root");
        config.setPassword("1234");

        // HikariCP Official, https://github.com/brettwooldridge/HikariCP

        datasource = new HikariDataSource(config);
        // HikariDataSoruce 생성 시, 파라미터로 DB 설정 정보를 담고 있는 Config 객체 전달
    }

    // 커넥션 객체 취득 용도의 메서드
    public static Connection getConnection() throws SQLException {
        return datasource.getConnection();
    }

    // 외부에서 기본생성자를 통해 객체 생성할 수 없도록 접근 제어자 private 적용
    private HikariCPDataSource() {}
}
