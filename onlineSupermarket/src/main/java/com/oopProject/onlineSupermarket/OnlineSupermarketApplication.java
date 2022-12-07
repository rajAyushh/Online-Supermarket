package com.oopProject.onlineSupermarket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;

import javax.sql.DataSource;

@SpringBootApplication
public class OnlineSupermarketApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineSupermarketApplication.class, args);
	}
	@Bean
	public DataSource dataSource() {
		return DataSourceBuilder.create()
				.url("jdbc:mysql://localhost:3306/online_supermarket_db?useSSL=FALSE")
				.username("root")
				.password("Passy@123")
				.build();
	}

}
