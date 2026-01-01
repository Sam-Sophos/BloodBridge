package com.example.BloodBankManagementSystem.repository;

import com.example.BloodBankManagementSystem.model.BloodType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodTypeRepository extends JpaRepository<BloodType, Long> {
    // You can add custom queries here if needed
}
