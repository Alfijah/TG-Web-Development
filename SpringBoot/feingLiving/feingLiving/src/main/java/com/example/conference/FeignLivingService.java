package com.example.conference;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(value="feignLiving", url="http://localhost:8090/living")
public interface FeignLivingService {

    @GetMapping("/food")
    String getFood();

    @GetMapping("/saying")
    String getSaying();

}
