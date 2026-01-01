package com.example.BloodBankManagementSystem.service;


import com.example.BloodBankManagementSystem.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService {
    UserDetailsService userDetailsService();
    List<User> getAllUser();
    void deleteUser(Long id);
}
