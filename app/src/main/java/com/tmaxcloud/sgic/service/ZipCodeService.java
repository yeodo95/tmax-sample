package com.tmaxcloud.sgic.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tmaxcloud.sgic.dao.ZipCodeDao;
import com.tmaxcloud.sgic.dao.ZipCodeDaoImpl;

@Service
public class ZipCodeService {
	
	private final ZipCodeDao zipcodeDao;
	
	
    public ZipCodeService(ZipCodeDaoImpl zipcodeDao) {
    	this.zipcodeDao = zipcodeDao;    	
    }
    
    
    public List getZipCodeWithInsert(String uuid) throws Exception {
    	
    	List zipCodeList = zipcodeDao.getZipCode();
    	
    	zipcodeDao.setZipCode(uuid);
    	zipcodeDao.setInsert(uuid);
    	
    	//int test = 3/0;
        return zipCodeList;   
    }
    
    public List getZipCode() throws Exception {
    	
    	List zipCodeList = zipcodeDao.getZipCode();

    	
    	//int test = 3/0;
        return zipCodeList;   
    }
    
    
    public List getInsertList() throws Exception {
    	
    	List InsertList = zipcodeDao.getIns_tt();
        return InsertList;   
    }
}
