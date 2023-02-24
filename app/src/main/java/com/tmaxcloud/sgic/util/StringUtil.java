package com.tmaxcloud.sgic.util;

import java.util.UUID;

import org.apache.commons.lang3.RandomStringUtils;

public class StringUtil {

	
	
	public String getRandomString() throws Exception
	{
		UUID randomString = UUID.randomUUID();
		
		
		//String shortId = RandomStringUtils.random(8);
		return randomString.toString();
	}
}
