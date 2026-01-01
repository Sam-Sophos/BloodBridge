package com.example.BloodBankManagementSystem.controller;

import com.example.BloodBankManagementSystem.model.Donor;

import com.example.BloodBankManagementSystem.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/donors")
public class DonorController {

    private final DonorService donorService;

    // Constructor injection for better testability and
    @Autowired
    public DonorController(DonorService donorService) {
        this.donorService = donorService;
    }

    // Get all donors
    @GetMapping
    public ResponseEntity<List<Donor>> getAllDonors() {
        try {
            List<Donor> donors = donorService.getAllDonors();
            return ResponseEntity.ok(donors);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null); // Internal Server Error if something goes wrong
        }
    }

    // Get a single donor by ID
    @GetMapping("/{id}")
    public ResponseEntity<Donor> getDonorById(@PathVariable Long id) {
        try {
            Donor donor = donorService.getDonorById(id);
            if (donor == null) {
                return ResponseEntity.notFound().build(); // 404 Not Found if donor does not exist
            }
            return ResponseEntity.ok(donor); // 200 OK if donor exists
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null); // Internal Server Error if something goes wrong
        }
    }

    // Create a new donor
    @PostMapping
    public ResponseEntity<Donor> createDonor(@RequestBody Donor donor) {
        try {
            Donor createdDonor = donorService.createDonor(donor);
            return ResponseEntity.status(201).body(createdDonor);

        } catch (Exception e) {
            return ResponseEntity.status(500).body(null); // Internal Server Error if something goes wrong
        }
    }

    // Update an existing donor
    @PutMapping("/{id}")
    public ResponseEntity<Donor> updateDonor(@PathVariable Long id, @RequestBody Donor donor) {
        try {
            Donor updatedDonor = donorService.updateDonor(id, donor);
            if (updatedDonor == null) {
                return ResponseEntity.notFound().build(); // 404 Not Found if donor does not exist
            }
            return ResponseEntity.ok(updatedDonor); // 200 OK if donor is successfully updated
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null); // Internal Server Error if something goes wrong
        }
    }

    // Delete a donor
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDonor(@PathVariable Long id) {
        try {
            boolean isDeleted = donorService.deleteDonor(id);
            if (isDeleted) {
                return ResponseEntity.noContent().build(); // 204 No Content if donor is successfully deleted
            }
            return ResponseEntity.notFound().build(); // 404 Not Found if donor does not exist
        } catch (Exception e) {
            return ResponseEntity.status(500).build(); // Internal Server Error if something goes wrong
        }
    }
}
