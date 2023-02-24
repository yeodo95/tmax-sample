package com.tmaxcloud.sgic.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.aspectj.lang.annotation.Aspect;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.transaction.SpringManagedTransactionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.aop.Advisor;
import org.springframework.aop.aspectj.AspectJExpressionPointcut;
import org.springframework.aop.support.DefaultPointcutAdvisor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.interceptor.DefaultTransactionAttribute;
import org.springframework.transaction.interceptor.RollbackRuleAttribute;
import org.springframework.transaction.interceptor.RuleBasedTransactionAttribute;
import org.springframework.transaction.interceptor.TransactionInterceptor;

@Aspect
@Configuration
@Import(MariaDBConfig.class)
@ComponentScan(	basePackages = {"com.tmaxcloud"}	)
public class MyBatisConfig  {




    @Autowired
    private MariaDBConfig mariaDBconfig;
	
    private  final Logger logger = LoggerFactory.getLogger(this.getClass());

    private final int TX_METHOD_TIMEOUT = 3;
    
    private final String AOP_POINTCUT_EXPRESSION = "execution(* com.tmaxcloud.sgic.service..*.*(..))";
    
	/**
	 * sessionfactory
	 */
	@Bean
	public SqlSessionFactory sqlSessionFactory() throws Exception {
		SqlSessionFactoryBean sessionFactoryBean = new SqlSessionFactoryBean();
		sessionFactoryBean.setDataSource(mariaDBconfig.dataSource());
		sessionFactoryBean.setConfigLocation(new PathMatchingResourcePatternResolver().getResource("classpath:mybatis-config.xml"));
		sessionFactoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:mybatis/mapper/**/*.xml"));
		sessionFactoryBean.setTypeAliasesPackage("com.tmaxcloud.sgic");
		
		sessionFactoryBean.setTransactionFactory(new SpringManagedTransactionFactory());
		return sessionFactoryBean.getObject();
	}

	/**
	 * SqlSessionTemplate
	 */

	@Bean
	public SqlSessionTemplate sqlSessionTemplate( SqlSessionFactory sqlSessionFactory) {
		return new SqlSessionTemplate(sqlSessionFactory);
	}


	
	/**
	 * DataSourceTransactionManager manager
	 *
	 * */
	@Bean(name="DataSourceTransactionManager ") 
	 public DataSourceTransactionManager transactionManager() {
	    logger.debug("======DataSourceTransactionManager  started=========");
	  
         DataSourceTransactionManager
         dataSourceTransactionManager = new  DataSourceTransactionManager(mariaDBconfig.dataSource());
         dataSourceTransactionManager.setGlobalRollbackOnParticipationFailure(true);
         dataSourceTransactionManager.setNestedTransactionAllowed(true);
         // nested return
         return dataSourceTransactionManager; 
	 }


   @Bean
   public TransactionInterceptor txAdvice() {
  	TransactionInterceptor txAdvice = new TransactionInterceptor();

   	Properties txAttributes = new Properties();
  	List<RollbackRuleAttribute> rollbackRules = new ArrayList<RollbackRuleAttribute>();
   	rollbackRules.add(new RollbackRuleAttribute(Exception.class));

   	/** If need to add additionall exceptio, add here **/
   	DefaultTransactionAttribute readOnlyAttribute = new DefaultTransactionAttribute(TransactionDefinition.PROPAGATION_REQUIRED);

   	readOnlyAttribute.setReadOnly(true);

   	readOnlyAttribute.setTimeout(TX_METHOD_TIMEOUT);

   	

       RuleBasedTransactionAttribute writeAttribute = new RuleBasedTransactionAttribute(TransactionDefinition.PROPAGATION_REQUIRED, rollbackRules);

       writeAttribute.setTimeout(TX_METHOD_TIMEOUT);

   	

		String readOnlyTransactionAttributesDefinition = readOnlyAttribute.toString();

		String writeTransactionAttributesDefinition = writeAttribute.toString();

		logger.info("Read Only Attributes :: {}", readOnlyTransactionAttributesDefinition);

		logger.info("Write Attributes :: {}", writeTransactionAttributesDefinition);

		

		

		// read-only

		/**
		txAttributes.setProperty("retrieve*", readOnlyTransactionAttributesDefinition);

		txAttributes.setProperty("select*", readOnlyTransactionAttributesDefinition);

		txAttributes.setProperty("get*", readOnlyTransactionAttributesDefinition);

		txAttributes.setProperty("list*", readOnlyTransactionAttributesDefinition);

		txAttributes.setProperty("search*", readOnlyTransactionAttributesDefinition);

		txAttributes.setProperty("find*", readOnlyTransactionAttributesDefinition);

		txAttributes.setProperty("count*", readOnlyTransactionAttributesDefinition);
   **/
		

		// write rollback-rule

		txAttributes.setProperty("*", writeTransactionAttributesDefinition);

		

		txAdvice.setTransactionAttributes(txAttributes);

		txAdvice.setTransactionManager(transactionManager());
       return txAdvice;

   }



   @Bean
   public Advisor txAdviceAdvisor() {

       AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();

       pointcut.setExpression("(execution(* *..*.web..*.*(..)) || execution(* *..*.service..*.*(..)))");

       pointcut.setExpression(AOP_POINTCUT_EXPRESSION);

       return new DefaultPointcutAdvisor(pointcut, txAdvice());

   }

	 

	/*
	 * @Bean(destroyMethod = "close") public DataSource dataSource() {
	 * HikariDataSource dataSource = new HikariDataSource(hikariConfig());
	 * dataSource.close(); return dataSource; }
	 */

	/*
	 * @Bean public TransactionInterceptor txAdvice() { TransactionInterceptor
	 * txAdvice = new TransactionInterceptor();
	 * 
	 * List<RollbackRuleAttribute> rollbackRules = new ArrayList<>();
	 * rollbackRules.add(new RollbackRuleAttribute(Exception.class));
	 * 
	 * DefaultTransactionAttribute attribute = new
	 * RuleBasedTransactionAttribute(TransactionDefinition.PROPAGATION_REQUIRED,
	 * rollbackRules); String transactionAttributesDefinition =
	 * attribute.toString();
	 * 
	 * Properties txAttributes = new Properties();
	 * 
	 * txAttributes.setProperty("*", transactionAttributesDefinition);
	 * txAdvice.setTransactionAttributes(txAttributes);
	 * txAdvice.setTransactionManager(txManager);
	 * 
	 * 
	 * 
	 * logger.debug("======txAdvice {}=========", txAdvice); return txAdvice; }
	 */

	/*
	 * @Bean public DefaultPointcutAdvisor txAdviceAdvisor() {
	 * 
	 * 
	 * logger.debug("======point cult started=========");
	 * 
	 * AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
	 * pointcut.setExpression("execution(* com.tmaxcloud.sgic.*.*(..))");
	 * 
	 * return new DefaultPointcutAdvisor(pointcut, txAdvice()); }
	 */
}
