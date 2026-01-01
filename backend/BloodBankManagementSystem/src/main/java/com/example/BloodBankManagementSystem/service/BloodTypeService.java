package com.example.BloodBankManagementSystem.service;

import com.example.BloodBankManagementSystem.model.BloodType;
import com.example.BloodBankManagementSystem.repository.BloodTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BloodTypeService {

    @Autowired
    private BloodTypeRepository bloodTypeRepository;

    // Get all blood types
    public List<BloodType> getAllBloodTypes() {
        return bloodTypeRepository.findAll();
    }

    // Get a specific blood type by id
    public BloodType getBloodTypeById(Long id) {
        Optional<BloodType> bloodType = bloodTypeRepository.findById(id);
        return bloodType.orElseThrow(() -> new RuntimeException("BloodType not found with id " + id));
    }

    // Create a new blood type
    public BloodType createBloodType(BloodType bloodType) {
        return bloodTypeRepository.save(bloodType);
    }

    // Update a blood type
    public BloodType updateBloodType(Long id, BloodType bloodType) {
        if (!bloodTypeRepository.existsById(id)) {
            throw new RuntimeException("BloodType not found with id " + id);
        }
        bloodType.setId(id);
        return bloodTypeRepository.save(bloodType);
    }

    // Delete a blood type
    public boolean deleteBloodType(Long id) {
        if (!bloodTypeRepository.existsById(id)) {
            throw new RuntimeException("BloodType not found with id " + id);
        }
        bloodTypeRepository.deleteById(id);
        return false;
    }
}
