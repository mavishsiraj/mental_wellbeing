package com.mindhaven.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.*;

@Service
public class GeminiService {

    private static final String BASE_URL =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=";

    private final String apiKey = System.getenv("GEMINI_API_KEY");

    private final Map<String, List<String>> memory = new HashMap<>();

    public String chat(String sessionId, String userMessage) throws Exception {

        memory.putIfAbsent(sessionId, new ArrayList<>());
        List<String> history = memory.get(sessionId);

        history.add("User: " + userMessage);

        String prompt =
            "You are a calm, empathetic mental health support companion.\n" +
            "Do not judge. Do not diagnose. Be supportive.\n\n" +
            String.join("\n", history);

        String body = """
        {
          "contents": [{
            "parts": [{
              "text": "%s"
            }]
          }]
        }
        """.formatted(prompt.replace("\"", "\\\""));

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(BASE_URL + apiKey))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(body))
            .build();

        HttpResponse<String> response =
            HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        ObjectMapper mapper = new ObjectMapper();
        var json = mapper.readTree(response.body());

        System.out.println("GEMINI RAW RESPONSE:");
        System.out.println(response.body());

        if (!json.has("candidates") || json.get("candidates").isEmpty()) {
            return "I’m here with you. Could you share a bit more about what’s on your mind?";
        }

        String reply = json
            .get("candidates")
            .get(0)
            .get("content")
            .get("parts")
            .get(0)
            .get("text")
            .asText();

        history.add("Bot: " + reply);

        if (history.size() > 10) {
            history.remove(0);
        }

        return reply;
    }
}
