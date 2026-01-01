package com.example.BloodBankManagementSystem.controller;

import com.example.BloodBankManagementSystem.model.BloodType;
import com.example.BloodBankManagementSystem.service.BloodTypeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blood_types")
public class BloodTypeController {

    private final BloodTypeService bloodTypeService;

    // Constructor injection for better testability and maintainability
    public BloodTypeController(BloodTypeService bloodTypeService) {
        this.bloodTypeService = bloodTypeService;
    }

    // Get all blood types
    @GetMapping
    public ResponseEntity<List<BloodType>> getAllBloodTypes() {
        try {
            List<BloodType> bloodTypes = bloodTypeService.getAllBloodTypes();
            return ResponseEntity.ok(bloodTypes);
        } catch (Exception e) {
            // Log the error (optional)
            return ResponseEntity.status(500).body(null); // Return 500 if an error occurs
        }
    }

    // Get blood type by ID
    @GetMapping("/{id}")
    public ResponseEntity<BloodType> getBloodTypeById(@PathVariable Long id) {
        try {
            BloodType bloodType = bloodTypeService.getBloodTypeById(id);
            if (bloodType == null) {
                return ResponseEntity.notFound().build(); // Return 404 if not found
            }
            return ResponseEntity.ok(bloodType);
        } catch (Exception e) {
            // Log the error (optional)
            return ResponseEntity.status(500).body(null); // Return 500 if an error occurs
        }
    }

    // Create a new blood type
    @PostMapping
    public ResponseEntity<BloodType> createBloodType(@RequestBody BloodType bloodType) {
        try {
            BloodType createdBloodType = bloodTypeService.createBloodType(bloodType);
            return ResponseEntity.status(201).body(createdBloodType); // Return 201 for creation
        } catch (Exception e) {
            // Log the error (optional)
            return ResponseEntity.status(500).body(null); // Return 500 if an error occurs
        }
    }

    // Update an existing blood type
    @PutMapping("/{id}")
    public ResponseEntity<BloodType> updateBloodType(@PathVariable Long id, @RequestBody BloodType bloodType) {
        try {
            BloodType updatedBloodType = bloodTypeService.updateBloodType(id, bloodType);
            if (updatedBloodType == null) {
                return ResponseEntity.notFound().build(); // Return 404 if not found
            }
            return ResponseEntity.ok(updatedBloodType); // Return 200 for successful update
        } catch (Exception e) {
            // Log the error (optional)
            return ResponseEntity.status(500).body(null); // Return 500 if an error occurs
        }
    }

    // Delete a blood type
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBloodType(@PathVariable Long id) {
        try {
            boolean isDeleted = bloodTypeService.deleteBloodType(id);
            if (isDeleted) {
                return ResponseEntity.noContent().build(); // Return 204 for successful deletion
            }
            return ResponseEntity.notFound().build(); // Return 404 if not found
        } catch (Exception e) {
            // Log the error (optional)
            return ResponseEntity.status(500).build(); // Return 500 if an error occurs
        }
    }
}
