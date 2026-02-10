package com.mindhaven.model;

public class CheckIn {
    private int stressLevel;
    private int energyLevel;
    private String feedback;

    public CheckIn(int stressLevel, int energyLevel, String feedback) {
        this.stressLevel = stressLevel;
        this.energyLevel = energyLevel;
        this.feedback = feedback;
    }

    public int getStressLevel() { return stressLevel; }
    public int getEnergyLevel() { return energyLevel; }
    public String getFeedback() { return feedback; }
}
