package com.mindhaven.controller;

import com.mindhaven.model.Mood;
import com.mindhaven.service.MoodService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/mood")
@CrossOrigin("*")
public class MoodController {

    private final MoodService moodService;

    public MoodController(MoodService moodService) {
        this.moodService = moodService;
    }

    @PostMapping("/track")
    public Mood trackMood(@RequestParam String mood) {
        return moodService.trackMood(mood);
    }
}
