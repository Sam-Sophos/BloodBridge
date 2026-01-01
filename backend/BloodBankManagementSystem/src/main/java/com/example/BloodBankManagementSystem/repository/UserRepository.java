package com.example.BloodBankManagementSystem.repository;

import com.example.BloodBankManagementSystem.model.Role;
import com.example.BloodBankManagementSystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    User findByRole(Role role);
}
