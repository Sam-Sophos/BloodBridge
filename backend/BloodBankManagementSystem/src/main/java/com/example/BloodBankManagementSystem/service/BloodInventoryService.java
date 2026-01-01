package com.example.BloodBankManagementSystem.service;

import com.example.BloodBankManagementSystem.model.BloodInventory;
import com.example.BloodBankManagementSystem.repository.BloodInventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BloodInventoryService {

    @Autowired
    private BloodInventoryRepository bloodInventoryRepository;

    // Create or update blood inventory
    public BloodInventory createOrUpdateBloodInventory(BloodInventory bloodInventory) {
        return bloodInventoryRepository.save(bloodInventory);
    }

    // Get all blood inventories
    public List<BloodInventory> getAllBloodInventories() {
        return bloodInventoryRepository.findAll();
    }

    // Get blood inventory by ID
    public BloodInventory getBloodInventoryById(Long id) {
        return bloodInventoryRepository.findById(id).orElse(null);
    }

    // Update the quantity of a specific blood inventory
    public BloodInventory updateBloodInventory(Long id, BloodInventory updatedInventory) {
        if (bloodInventoryRepository.existsById(id)) {
            updatedInventory.setId(id);
            return bloodInventoryRepository.save(updatedInventory);
        }
        return null;
    }

    // Delete a blood inventory
    public boolean deleteBloodInventory(Long id) {
        if (bloodInventoryRepository.existsById(id)) {
            bloodInventoryRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<BloodInventory> getAdminView() {
        return bloodInventoryRepository.findAll();
    }

    public List<BloodInventory> getAllBloodInventory() {
        return bloodInventoryRepository.findAll();
    }
}
