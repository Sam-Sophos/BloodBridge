package com.example.BloodBankManagementSystem.controller;

import com.example.BloodBankManagementSystem.model.Beneficiary;
import com.example.BloodBankManagementSystem.service.BeneficiaryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/beneficiaries")
public class BeneficiaryController {

    private final BeneficiaryService beneficiaryService;

    // Constructor injection for better testability and maintainability
    public BeneficiaryController(BeneficiaryService beneficiaryService) {
        this.beneficiaryService = beneficiaryService;
    }

    // Get all beneficiaries
    @GetMapping
    public ResponseEntity<List<Beneficiary>> getAllBeneficiaries() {
        try {
            List<Beneficiary> beneficiaries = beneficiaryService.getAllBeneficiaries();
            return ResponseEntity.ok(beneficiaries);
        } catch (Exception e) {
            // Log the error (optional)
            return ResponseEntity.status(500).body(null); // Return 500 if an error occurs
        }
    }
}
