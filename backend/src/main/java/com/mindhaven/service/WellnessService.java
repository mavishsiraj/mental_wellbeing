package com.mindhaven.service;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class WellnessService {

    public List<String> getTips() {
        return List.of(
            "Take 5 deep breaths 🌬️",
            "Go for a short walk 🚶",
            "Drink water 💧",
            "Limit social media 📵",
            "Sleep on time 😴"
        );
    }
}
