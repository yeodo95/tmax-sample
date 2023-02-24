package com.tmaxcloud.sgic;

import org.junit.jupiter.api.Test;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootTest
@ComponentScan(	basePackages = {"com.tmaxcloud"})
@EnableTransactionManagement
@EnableAutoConfiguration()
class DemoApplicationTests {


}
