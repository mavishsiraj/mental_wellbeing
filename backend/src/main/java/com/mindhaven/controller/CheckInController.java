package com.mindhaven.controller;

import com.mindhaven.model.CheckIn;
import com.mindhaven.service.CheckInService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/checkin")
@CrossOrigin("*")
public class CheckInController {

    private final CheckInService checkInService;

    public CheckInController(CheckInService checkInService) {
        this.checkInService = checkInService;
    }

    @PostMapping("/daily")
    public CheckIn dailyCheckIn(
            @RequestParam int stress,
            @RequestParam int energy) {

        return checkInService.dailyCheckIn(stress, energy);
    }
}
