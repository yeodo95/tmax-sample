package com.tmaxcloud.sgic.dao;

import java.util.List;

public interface ZipCodeDao {
	
	List getZipCode() throws Exception;
	List getIns_tt() throws Exception;
	void setInsert(String uuid) throws Exception;
	void setZipCode(String uuid) throws Exception;

}
