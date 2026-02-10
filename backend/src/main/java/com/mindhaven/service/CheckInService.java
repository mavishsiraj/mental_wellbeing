package com.mindhaven.service;

import com.mindhaven.model.CheckIn;
import org.springframework.stereotype.Service;

@Service
public class CheckInService {

    public CheckIn dailyCheckIn(int stress, int energy) {
        String feedback;

        if (stress > 7) {
            feedback = "Your stress is high. Try meditation ";
        } else if (energy < 4) {
            feedback = "You seem tired. Rest is important ";
        } else {
            feedback = "You're doing well today ";
        }

        return new CheckIn(stress, energy, feedback);
    }
}
