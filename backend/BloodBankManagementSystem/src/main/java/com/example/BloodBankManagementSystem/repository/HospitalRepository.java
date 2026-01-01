package com.example.BloodBankManagementSystem.repository;

import com.example.BloodBankManagementSystem.model.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HospitalRepository extends JpaRepository<Hospital, Long> {
}