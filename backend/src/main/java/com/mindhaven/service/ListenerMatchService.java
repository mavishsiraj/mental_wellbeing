package com.mindhaven.service;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ListenerMatchService {

    public String matchListener() {
        return "room-" + UUID.randomUUID();
    }
}
