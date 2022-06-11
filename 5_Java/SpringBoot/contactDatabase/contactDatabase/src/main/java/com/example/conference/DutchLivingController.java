package com.example.conference;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/living")
public class DutchLivingController {

    @GetMapping("/food")
    public String getFood() {
        return "The Dutch love Calve Pindakaas!";
    }

    @GetMapping("/saying")
    public String getSaying() {
        return "Alsjemenou!";
}

}
