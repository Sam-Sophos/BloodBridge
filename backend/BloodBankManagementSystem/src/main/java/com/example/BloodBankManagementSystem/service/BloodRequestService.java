package com.example.BloodBankManagementSystem.service;

import com.example.BloodBankManagementSystem.model.BloodRequest;
import com.example.BloodBankManagementSystem.repository.BloodRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BloodRequestService {

    @Autowired
    private BloodRequestRepository bloodRequestRepository;

    public List<BloodRequest> getAllBloodRequests() {
        return bloodRequestRepository.findAll();
    }

    public BloodRequest getBloodRequestById(Long id) {
        return bloodRequestRepository.findById(id).orElse(null);
    }

    public BloodRequest addBloodRequest(BloodRequest bloodRequest) {
        return bloodRequestRepository.save(bloodRequest);
    }

    public BloodRequest updateBloodRequest(Long id, BloodRequest bloodRequest) {
        if(bloodRequestRepository.existsById(id)) {
            bloodRequest.setId(id);
            return bloodRequestRepository.save(bloodRequest);
        }
        return null;
    }

    public boolean deleteBloodRequest(Long id) {
        bloodRequestRepository.deleteById(id);
        return false;
    }

    public BloodRequest createBloodRequest(BloodRequest bloodRequest) {
        return bloodRequestRepository.save(bloodRequest);
    }
}
