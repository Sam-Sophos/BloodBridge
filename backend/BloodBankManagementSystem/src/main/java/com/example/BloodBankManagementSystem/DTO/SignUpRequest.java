package com.example.BloodBankManagementSystem.DTO;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SignUpRequest {
    private String name;
    private String username;
    private String password;
}
