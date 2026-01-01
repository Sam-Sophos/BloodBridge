package com.example.BloodBankManagementSystem.service;


import com.example.BloodBankManagementSystem.DTO.JwtAuthenticationRequest;
import com.example.BloodBankManagementSystem.DTO.RefreshTokenRequest;
import com.example.BloodBankManagementSystem.DTO.SignInRequest;
import com.example.BloodBankManagementSystem.DTO.SignUpRequest;

public interface AuthenticationService {
    JwtAuthenticationRequest signup(SignUpRequest signUpRequest);
    JwtAuthenticationRequest signIn(SignInRequest signInRequest);
    JwtAuthenticationRequest refreshToken(RefreshTokenRequest refreshTokenRequest);

}
