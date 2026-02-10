package com.mindhaven.controller;

import com.mindhaven.model.GeminiRequest;
import com.mindhaven.model.TalkSession;
import com.mindhaven.service.GeminiService;
import com.mindhaven.service.ListenerMatchService;
import com.mindhaven.service.ListenerService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/talk")
@CrossOrigin("*")
public class TalkController {

    private final GeminiService geminiService;
    private final ListenerService listenerService;
    private final ListenerMatchService matchService;

    public TalkController(
            GeminiService geminiService,
            ListenerService listenerService,
            ListenerMatchService matchService
    ) {
        this.geminiService = geminiService;
        this.listenerService = listenerService;
        this.matchService = matchService;
    }

    // 1️⃣ Start anonymous session
    @PostMapping("/session")
    public TalkSession startSession() {
        return new TalkSession();
    }

    // 🔥 Gemini-powered conversation
    @PostMapping("/bot/message")
    public Map<String, String> talkToBot(@RequestBody GeminiRequest req) throws Exception {
        String reply = geminiService.chat(req.sessionId, req.message);
        return Map.of("reply", reply);
    }

    // 3️⃣ Check available listeners
    @GetMapping("/listeners/available")
    public Map<String, Object> availableListeners() {
        return Map.of(
                "available", listenerService.availableCount(),
                "message", "Listeners are available if you’d like to talk 🌱"
        );
    }

    // 4️⃣ Request a listener
    @PostMapping("/listeners/request")
    public Map<String, String> requestListener() {
        return Map.of(
                "roomId", matchService.matchListener(),
                "listener", "Listener 🌿",
                "status", "matched"
        );
    }

    // 5️⃣ Become a listener
    @PostMapping("/listener/apply")
    public Map<String, String> becomeListener(@RequestParam String reason) {
        listenerService.apply(reason);
        return Map.of(
                "status", "pending",
                "message", "Thank you for wanting to support others 🤍"
        );
    }
}
