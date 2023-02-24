package com.tmaxcloud.sgic.web;



import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.tmaxcloud.sgic.service.ZipCodeService;

@Controller 
public class nhController {
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	
    
	private final ZipCodeService zipcodeservice;
	
	@Autowired
	public nhController(ZipCodeService zipcodeservice) {
		this.zipcodeservice = zipcodeservice;
	}   
	
	
	
    @RequestMapping("/nhlife" ) 
    public ModelAndView  welcome() throws Exception{ 
    	logger.debug("실습222입니다. 이거 될까요   ?  ");
    	ModelAndView mav = new ModelAndView();
    	List zipcodeData = zipcodeservice.getZipCode();
    	
    	List insert_list = zipcodeservice.getInsertList();
    	
    	mav.addObject("zipcode", zipcodeData);
    	mav.addObject("insert_list", insert_list);
    	
    	
    	mav.setViewName("nhlife");
        return mav; 
    }  
}
