package com.example.BloodBankManagementSystem.repository;

import com.example.BloodBankManagementSystem.model.BloodInventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodInventoryRepository extends JpaRepository<BloodInventory, Long> {
    // No custom methods here in the original code
}
