package com.example.BloodBankManagementSystem.repository;

import com.example.BloodBankManagementSystem.model.BloodRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodRequestRepository extends JpaRepository<BloodRequest, Long> {
    // No additional methods required for basic CRUD
}

