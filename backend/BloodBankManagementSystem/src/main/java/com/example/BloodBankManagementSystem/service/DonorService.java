package com.example.BloodBankManagementSystem.service;

import com.example.BloodBankManagementSystem.model.Donor;

import java.util.List;

public interface DonorService {
    List<Donor> getAllDonors();
    Donor getDonorById(Long id);
    Donor updateDonor(Long id, Donor donor);
    boolean deleteDonor(Long id);
    Donor createDonor(Donor donor);
}
