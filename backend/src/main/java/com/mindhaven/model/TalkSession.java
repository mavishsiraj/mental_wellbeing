package com.mindhaven.model;

import java.util.UUID;

public class TalkSession {
    private String sessionId;

    public TalkSession() {
        this.sessionId = UUID.randomUUID().toString();
    }

    public String getSessionId() {
        return sessionId;
    }
}
