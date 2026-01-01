package com.example.BloodBankManagementSystem.controller;

import com.example.BloodBankManagementSystem.model.BloodInventory;
import com.example.BloodBankManagementSystem.service.BloodInventoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blood_inventory")
public class BloodInventoryController {

    private final BloodInventoryService bloodInventoryService;

    // Constructor injection for better testability and maintainability
    public BloodInventoryController(BloodInventoryService bloodInventoryService) {
        this.bloodInventoryService = bloodInventoryService;
    }

    // Get all blood inventories
    @GetMapping
    public ResponseEntity<List<BloodInventory>> getAllBloodInventories() {
        try {
            List<BloodInventory> inventory = bloodInventoryService.getAllBloodInventories();
            if (inventory.isEmpty()) {
                return ResponseEntity.noContent().build(); // Return 204 if no inventory found
            }
            return ResponseEntity.ok(inventory);
        } catch (Exception e) {
            // Log the error (optional)
            return ResponseEntity.status(500).body(null); // Return 500 if an error occurs
        }
    }

    // Get blood inventory by ID
    @GetMapping("/{id}")
    public ResponseEntity<BloodInventory> getBloodInventoryById(@PathVariable Long id) {
        try {
            BloodInventory bloodInventory = bloodInventoryService.getBloodInventoryById(id);
            if (bloodInventory == null) {
                return ResponseEntity.notFound().build(); // Return 404 if not found
            }
            return ResponseEntity.ok(bloodInventory);
        } catch (Exception e) {
            // Log the error (optional)
            return ResponseEntity.status(500).body(null); // Return 500 if an error occurs
        }
    }

    // Add or update blood inventory
    @PostMapping
    public ResponseEntity<BloodInventory> createOrUpdateBloodInventory(@RequestBody BloodInventory bloodInventory) {
        try {
            BloodInventory createdInventory = bloodInventoryService.createOrUpdateBloodInventory(bloodInventory);
            return ResponseEntity.status(201).body(createdInventory); // Return 201 for creation
        } catch (Exception e) {
            // Log the error (optional)
            return ResponseEntity.status(500).body(null); // Return 500 if an error occurs
        }
    }

    // Update blood inventory
    @PutMapping("/{id}")
    public ResponseEntity<BloodInventory> updateBloodInventory(@PathVariable Long id, @RequestBody BloodInventory bloodInventory) {
        try {
            BloodInventory updatedInventory = bloodInventoryService.updateBloodInventory(id, bloodInventory);
            return ResponseEntity.ok(updatedInventory); // Return 200 for successful update
        } catch (Exception e) {
            // Log the error (optional)
            return ResponseEntity.status(500).body(null); // Return 500 if an error occurs
        }
    }

    // Delete blood inventory
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBloodInventory(@PathVariable Long id) {
        try {
            boolean deleted = bloodInventoryService.deleteBloodInventory(id);
            if (deleted) {
                return ResponseEntity.noContent().build(); // Return 204 if successfully deleted
            }
            return ResponseEntity.notFound().build(); // Return 404 if not found
        } catch (Exception e) {
            // Log the error (optional)
            return ResponseEntity.status(500).build(); // Return 500 if an error occurs
        }
    }
}
