package com.tmaxcloud.sgic.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.tmaxcloud.sgic.util.StringUtil;


@Repository
public class ZipCodeDaoImpl implements ZipCodeDao{
	
	private SqlSession sqlSession;
	

	
	
	@Autowired
	 ZipCodeDaoImpl(SqlSessionTemplate sqlSession) throws Exception
	 {
			this.sqlSession = sqlSession;
		
		
	 }

	/**
	  public void setSqlSession(SqlSession sqlSession) {
	    this.sqlSession = sqlSession;
	  }
    **/
		
	@Override
	public List getZipCode() throws Exception{
		// TODO Auto-generated method stub
		
		Map daoparam = new HashMap();
		
		String selectnamespace = "com.tmaxcloud.sgic.dao.ZipCodeDao.getZipCode";
		List getZipCodeResultMap = sqlSession.selectList(selectnamespace);

		return getZipCodeResultMap;
	}
	
	@Override
	public void setInsert(String suuid) throws Exception{
		String insertnamespace = "com.tmaxcloud.sgic.dao.ZipCodeDao.setTestIns";

		//st.getRandomString();

		sqlSession.insert(insertnamespace, suuid);
	}

	@Override
	public List getIns_tt() throws Exception {
		String getIns_ttnamespace = "com.tmaxcloud.sgic.dao.ZipCodeDao.getIns_tt";
		List Ins_ttList = sqlSession.selectList(getIns_ttnamespace);
		return Ins_ttList;
	}

	@Override
	public void setZipCode(String suuid) throws Exception {
		// TODO Auto-generated method stub
		String setZipCodenamespace = "com.tmaxcloud.sgic.dao.ZipCodeDao.setZipCode";	
		
		//values (#{ID} , #{ZIP_NO}, #{SIDO}, #{SIGUNGU}, #{EUPMYUN}, #{DORO})
		HashMap<String,String> parameters = new HashMap<String,String> ();
		
		parameters.put("ID", suuid); 
		parameters.put("ZIP_NO", "12345");
		parameters.put("SIDO", "서울시");
		parameters.put("SIGUNGU", "종로5가");
		parameters.put("EUPMYUN", "연지동");
		parameters.put("DORO", "김상옥로");
		
		
		
		sqlSession.insert(setZipCodenamespace, parameters);
	}


}
