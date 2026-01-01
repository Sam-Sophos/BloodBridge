package com.example.BloodBankManagementSystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "home"; // This will load home.html
    }


    // Other mappings for non-admin pages (can be renamed to avoid conflicts)
    @GetMapping("/donate")
    public String donate() {
        return "donate"; // Serve the donate.html page
    }

    @GetMapping("/get_donation")
    public String getDonation() {
        return "get_donation"; // Serve the get_donation.html page
    }
}
