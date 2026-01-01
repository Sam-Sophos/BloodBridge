package com.example.BloodBankManagementSystem.DTO;

import lombok.Data;

@Data
public class JwtAuthenticationRequest {
    private String token;
    private String refreshToken;
}
