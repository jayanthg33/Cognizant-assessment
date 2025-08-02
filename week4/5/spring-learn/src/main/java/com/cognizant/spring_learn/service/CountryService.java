package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import java.util.List;

public class CountryService {
    public Country getCountry(String code) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countryList = (List<Country>) context.getBean("countryList");
        Country result = countryList.stream()
            .filter(c -> c.getCode().equalsIgnoreCase(code))
            .findAny()
            .orElse(null);
        context.close();
        return result;
    }
}
