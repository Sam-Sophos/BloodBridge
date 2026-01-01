package com.example.BloodBankManagementSystem.controller;

import com.example.BloodBankManagementSystem.model.Hospital;
import com.example.BloodBankManagementSystem.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/hospitals")
public class HospitalController {

    @Autowired
    private HospitalService hospitalService;

    // Get all hospitals
    @GetMapping
    public List<Hospital> getAllHospitals() {
        return hospitalService.getAllHospitals();
    }

    // Get hospital by id
    @GetMapping("/{id}")
    public Optional<Hospital> getHospitalById(@PathVariable Long id) {
        return Optional.ofNullable(hospitalService.getHospitalById(id));
    }

    // Create a new hospital
    @PostMapping
    public Hospital createHospital(@RequestBody Hospital hospital) {
        return hospitalService.createHospital(hospital);
    }

    // Update an existing hospital
    @PutMapping("/{id}")
    public Hospital updateHospital(@PathVariable Long id, @RequestBody Hospital hospitalDetails) {
        return hospitalService.updateHospital(id, hospitalDetails);
    }

    // Delete a hospital
    @DeleteMapping("/{id}")
    public void deleteHospital(@PathVariable Long id) {
        hospitalService.deleteHospital(id);
    }
}


