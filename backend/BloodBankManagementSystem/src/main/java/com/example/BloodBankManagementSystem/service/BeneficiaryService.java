package com.example.BloodBankManagementSystem.service;

import com.example.BloodBankManagementSystem.model.Beneficiary;
import com.example.BloodBankManagementSystem.repository.BeneficiaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BeneficiaryService {

    @Autowired
    private BeneficiaryRepository beneficiaryRepository;

    public List<Beneficiary> getAllBeneficiaries() {
        return beneficiaryRepository.findAll(); // Ensure findAll() returns List<Beneficiary>
    }

    public Beneficiary getBeneficiaryById(Long id) {
        return beneficiaryRepository.findById(id).orElse(null);
    }

    public Beneficiary addBeneficiary(Beneficiary beneficiary) {
        return beneficiaryRepository.save(beneficiary);
    }

    public Beneficiary updateBeneficiary(Long id, Beneficiary beneficiary) {
        if (beneficiaryRepository.existsById(id)) {
            beneficiary.setId(id);
            return beneficiaryRepository.save(beneficiary);
        }
        return null;
    }

    public void deleteBeneficiary(Long id) {
        beneficiaryRepository.deleteById(id);
    }

    public Beneficiary createBeneficiary(Beneficiary beneficiary) {
        // Save the beneficiary object and return the saved entity
        return beneficiaryRepository.save(beneficiary);  // Assuming you're using JPA repository for database operations
    }

}
