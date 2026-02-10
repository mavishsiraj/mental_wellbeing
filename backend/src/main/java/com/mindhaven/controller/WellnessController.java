package com.mindhaven.controller;

import com.mindhaven.service.WellnessService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wellness")
@CrossOrigin("*")
public class WellnessController {

    private final WellnessService wellnessService;

    public WellnessController(WellnessService wellnessService) {
        this.wellnessService = wellnessService;
    }

    @GetMapping("/tips")
    public List<String> tips() {
        return wellnessService.getTips();
    }
}
