package com.example.BloodBankManagementSystem.service;

import com.example.BloodBankManagementSystem.model.Donation;
import com.example.BloodBankManagementSystem.model.Donor;
import com.example.BloodBankManagementSystem.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DonationServiceImpl implements DonationService{
    @Autowired
    private DonationRepository donationRepository;
    @Override
    public List<Donation> getAllDonations() {
        return donationRepository.findAll();
    }
    @Override
    public Donation updateDonation(Long id, Donation donation) {
        if(donationRepository.existsById(id)) {
            donation.setId(id);
            return donationRepository.save(donation);
        }
        return null;
    }
    @Override
    public boolean deleteDonation(Long id) {
        donationRepository.deleteById(id);
        return true;
    }
}
