package com.mindhaven.service;

import org.springframework.stereotype.Service;

@Service
public class BotTalkService {

    public String reply(String message) {

        String msg = message.toLowerCase();

        if (msg.contains("anxious") || msg.contains("scared")) {
            return "That sounds really heavy. You don’t have to go through this alone 🤍";
        }

        if (msg.contains("tired") || msg.contains("exhausted")) {
            return "It sounds like you’ve been carrying a lot lately. Rest matters 🌱";
        }

        if (msg.contains("alone")) {
            return "Feeling alone can hurt deeply. I’m here with you right now 💙";
        }

        return "Thank you for sharing that. I’m listening 🤍";
    }
}
