package com.example.conference;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/feign")
public class FeignLivingController {

    @Autowired
    private FeignLivingService feignLivingService;

    @GetMapping("/living-food")
    public String getFood() {
        return feignLivingService.getFood();
    }

    @GetMapping("/living-saying")
    public String getSaying() {
        return feignLivingService.getSaying();
    }
}
