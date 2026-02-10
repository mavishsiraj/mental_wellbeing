package com.mindhaven.model;

public class Mood {
    private String mood;
    private String message;

    public Mood(String mood, String message) {
        this.mood = mood;
        this.message = message;
    }

    public String getMood() { return mood; }
    public String getMessage() { return message; }
}
