package com.example.BloodBankManagementSystem.controller;

import com.example.BloodBankManagementSystem.model.BloodRequest;
import com.example.BloodBankManagementSystem.service.BloodRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blood_requests") // This defines the base URL for all methods in this controller
public class BloodRequestController {

    @Autowired
    private BloodRequestService bloodRequestService;

    // Get all blood requests
    @GetMapping
    public ResponseEntity<List<BloodRequest>> getAllBloodRequests() {
        List<BloodRequest> bloodRequests = bloodRequestService.getAllBloodRequests();

        return ResponseEntity.ok(bloodRequests); // Return HTTP 200 OK with the list
    }

    // Get blood request by ID
    @GetMapping("/{id}")
    public ResponseEntity<BloodRequest> getBloodRequestById(@PathVariable Long id) {
        BloodRequest bloodRequest = bloodRequestService.getBloodRequestById(id);
        if (bloodRequest == null) {
            return ResponseEntity.notFound().build(); // Return HTTP 404 Not Found if the ID is invalid
        }

        return ResponseEntity.ok(bloodRequest); // Return HTTP 200 OK with the blood request
    }

    // Create a new blood request
    @PostMapping
    public ResponseEntity<BloodRequest> createBloodRequest(@RequestBody BloodRequest bloodRequest) {
        BloodRequest createdBloodRequest = bloodRequestService.addBloodRequest(bloodRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdBloodRequest);
    }

    // Update an existing blood request
    @PutMapping("/{id}")
    public ResponseEntity<BloodRequest> updateBloodRequest(@PathVariable Long id, @RequestBody BloodRequest bloodRequest) {
        BloodRequest updatedBloodRequest = bloodRequestService.updateBloodRequest(id, bloodRequest);
        if (updatedBloodRequest == null) {
            return ResponseEntity.notFound().build(); // Return 404 if not found
        }

        return ResponseEntity.ok(updatedBloodRequest);
    }

    // Delete a blood request
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBloodRequest(@PathVariable Long id) {
        boolean isDeleted = bloodRequestService.deleteBloodRequest(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build(); // Return HTTP 204 No Content on successful deletion
        }
        return ResponseEntity.notFound().build(); // Return HTTP 404 if not found
    }
}
