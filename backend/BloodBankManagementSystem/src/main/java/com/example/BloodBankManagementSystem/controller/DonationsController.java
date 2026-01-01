package com.example.BloodBankManagementSystem.controller;

import com.example.BloodBankManagementSystem.DTO.ApiResponse;
import com.example.BloodBankManagementSystem.model.Donation;
import com.example.BloodBankManagementSystem.model.Donor;
import com.example.BloodBankManagementSystem.service.DonationService;
import com.example.BloodBankManagementSystem.service.DonorServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/donations")
public class DonationsController {
    private final DonationService donationService;
    @Autowired
    public DonationsController(DonationService donationService) {
        this.donationService = donationService;
    }

    // Get all donors
    @GetMapping
    public ResponseEntity<ApiResponse> getAllDonations() {
        try {
            List<Donation> donation = donationService.getAllDonations();
            return ResponseEntity.ok(new ApiResponse("success",donation));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse("err",e.getMessage())); // Internal Server Error if something goes wrong
        }
    }

    // Get a single donor by ID
//    @GetMapping("/{id}")
//    public ResponseEntity<Donation> getDonationById(@PathVariable Long id) {
//        try {
//            Donation donation = donationService.(id);
//            if (donor == null) {
//                return ResponseEntity.notFound().build(); // 404 Not Found if donor does not exist
//            }
//            return ResponseEntity.ok(donor); // 200 OK if donor exists
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(null); // Internal Server Error if something goes wrong
//        }
//    }



    // Update an existing donor
    @PutMapping("/{id}")
    public ResponseEntity<Donation> updateDonation(@PathVariable Long id, @RequestBody Donation donation) {
        try {
            Donation donation1 = donationService.updateDonation(id, donation);
            if (donation1 == null) {
                return ResponseEntity.notFound().build(); // 404 Not Found if donor does not exist
            }
            return ResponseEntity.ok(donation1); // 200 OK if donor is successfully updated
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null); // Internal Server Error if something goes wrong
        }
    }

    // Delete a donor
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDonation(@PathVariable Long id) {
        try {
            boolean isDeleted = donationService.deleteDonation(id);
            if (isDeleted) {
                return ResponseEntity.noContent().build(); // 204 No Content if donor is successfully deleted
            }
            return ResponseEntity.notFound().build(); // 404 Not Found if donor does not exist
        } catch (Exception e) {
            return ResponseEntity.status(500).build(); // Internal Server Error if something goes wrong
        }
    }
}
