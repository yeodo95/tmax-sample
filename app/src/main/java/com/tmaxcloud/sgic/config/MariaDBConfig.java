package com.tmaxcloud.sgic.config;



import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionManager;
import org.springframework.transaction.annotation.TransactionManagementConfigurer;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;


@Configuration
@PropertySource("classpath:/application.yaml")

public class MariaDBConfig implements TransactionManagementConfigurer{
	
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	

	
	@Bean
	@ConfigurationProperties(prefix = "spring.datasource.hikari")
	public HikariConfig hikariConfig() {
		
		
		return new HikariConfig();
	}

	/**
	 * datsource :datasource 라는 이름으로 삽입
	 * 
	 * @param hikariConfig
	 * @return
	 * @throws Exception
	 */
  
	
	
	

	@Bean(destroyMethod="close")
    @ConfigurationProperties("spring.datasource")
	public DataSource dataSource()  {
		DataSource dataSource = new HikariDataSource(hikariConfig());
		return dataSource;
	
	}
    
    @Bean(name="transactionManager")
	public PlatformTransactionManager transactionManager() 
	{
		logger.debug("============trasnaction is now ???????================");
		return new DataSourceTransactionManager(dataSource());
	}


	@Override
	public TransactionManager annotationDrivenTransactionManager() {
		return transactionManager();
	}
}
