package com.tmaxcloud.sgic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@ComponentScan(	basePackages = {"com.tmaxcloud"})
@EnableTransactionManagement
@EnableAutoConfiguration
public class DemoApplication {

	
public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
