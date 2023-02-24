package com.tmaxcloud.sgic.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tmaxcloud.sgic.service.ZipCodeService;
import com.tmaxcloud.sgic.util.StringUtil;


@RestController
public class Health {

		// public static String suuid ;
		
/**
		public Health(ZipCodeService zipcodeservice {
		
		}
**/

	
	@RequestMapping("/health")
	public String hello() throws Exception {
		String res = "health";
		return res;
	}

}