package com.mindhaven.service;

import com.mindhaven.model.Mood;
import org.springframework.stereotype.Service;

@Service
public class MoodService {

    public Mood trackMood(String mood) {
        String msg;

        switch (mood.toLowerCase()) {
            case "happy":
                msg = "That's amazing! Keep spreading positivity 🌞";
                break;
            case "sad":
                msg = "It's okay to feel sad. Take a deep breath 💙";
                break;
            case "anxious":
                msg = "Pause. Breathe. You are safe 🌿";
                break;
            default:
                msg = "Thanks for sharing how you feel 🤍";
        }

        return new Mood(mood, msg);
    }
}
