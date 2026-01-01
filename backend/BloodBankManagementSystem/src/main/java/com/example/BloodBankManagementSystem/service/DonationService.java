package com.example.BloodBankManagementSystem.service;

import com.example.BloodBankManagementSystem.model.Donation;

import java.util.List;

public interface DonationService {
    List<Donation> getAllDonations();
    Donation updateDonation(Long id, Donation donation);
    boolean deleteDonation(Long id);
}
