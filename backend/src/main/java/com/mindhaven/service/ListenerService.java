package com.mindhaven.service;

import com.mindhaven.model.Listener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ListenerService {

    private final List<Listener> listeners = new ArrayList<>();

    public Listener apply(String reason) {
        Listener listener = new Listener("listener-" + (listeners.size() + 1));
        listeners.add(listener);
        return listener;
    }

    public int availableCount() {
        return (int) listeners.stream().filter(l -> l.available).count();
    }
}
