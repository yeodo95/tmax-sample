package com.tmaxcloud.sgic.web;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tmaxcloud.sgic.service.ZipCodeService;
import com.tmaxcloud.sgic.util.StringUtil;


@RestController 
@RequestMapping("/MsaSample1" ) 
public class ZipCodeController { 
	
	//public static String suuid ;
	private  StringUtil st = new StringUtil();
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
    
	private final ZipCodeService zipcodeservice;
	
	@Autowired
	public ZipCodeController(ZipCodeService zipcodeservice) {
		this.zipcodeservice = zipcodeservice;
	}

	@GetMapping("/hello")
    public List hello() throws Exception{ 
		String suuid = st.getRandomString();
		
        return zipcodeservice.getZipCodeWithInsert(suuid); 
    }  
} 