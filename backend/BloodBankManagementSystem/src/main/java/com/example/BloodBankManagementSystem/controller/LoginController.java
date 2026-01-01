package com.example.BloodBankManagementSystem.controller;

import com.example.BloodBankManagementSystem.DTO.ApiResponse;
import com.example.BloodBankManagementSystem.DTO.RefreshTokenRequest;
import com.example.BloodBankManagementSystem.DTO.SignInRequest;
import com.example.BloodBankManagementSystem.DTO.SignUpRequest;
import com.example.BloodBankManagementSystem.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {
    private final AuthenticationService authenticationService;
    @Autowired
    public LoginController(AuthenticationService authenticationService){
        this.authenticationService=authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse> signup(@RequestBody SignUpRequest signUpRequest){
        try {
            return ResponseEntity.ok(new ApiResponse("success",authenticationService.signup(signUpRequest)));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR));
        }
    }
    @PostMapping("/signin")
    public ResponseEntity<ApiResponse> signIn(@RequestBody SignInRequest signInRequest){
        try {
            return ResponseEntity.ok(new ApiResponse("success",authenticationService.signIn(signInRequest)));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR));
        }
    }

    @PostMapping("/refresh")
    public ResponseEntity<ApiResponse> refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest){
        try {
            return ResponseEntity.ok(new ApiResponse("success",authenticationService.refreshToken(refreshTokenRequest)));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR));
        }
    }

}
