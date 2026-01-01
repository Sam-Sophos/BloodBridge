package com.example.BloodBankManagementSystem.repository;

import com.example.BloodBankManagementSystem.model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation,Long> {
}
