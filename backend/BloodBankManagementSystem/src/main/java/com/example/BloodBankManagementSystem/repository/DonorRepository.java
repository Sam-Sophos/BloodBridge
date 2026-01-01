package com.example.BloodBankManagementSystem.repository;

import com.example.BloodBankManagementSystem.model.Donor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonorRepository extends JpaRepository<Donor, Long> {
}
