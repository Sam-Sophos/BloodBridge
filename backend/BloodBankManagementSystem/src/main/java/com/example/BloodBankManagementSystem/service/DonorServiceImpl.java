package com.example.BloodBankManagementSystem.service;

import com.example.BloodBankManagementSystem.model.Donation;
import com.example.BloodBankManagementSystem.model.Donor;
import com.example.BloodBankManagementSystem.model.Receiver;
import com.example.BloodBankManagementSystem.model.Status;
import com.example.BloodBankManagementSystem.repository.DonationRepository;
import com.example.BloodBankManagementSystem.repository.DonorRepository;
import com.example.BloodBankManagementSystem.repository.ReceiverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonorServiceImpl implements DonorService{

    @Autowired
    private DonorRepository donorRepository;
    @Autowired
    private ReceiverRepository receiverRepository;
    @Autowired
    private DonationRepository donationRepository;
    @Override
    public List<Donor> getAllDonors() {
        return donorRepository.findAll();
    }
    @Override
    public Donor getDonorById(Long id) {
        return donorRepository.findById(id).orElse(null);
    }

    @Override
    public Donor updateDonor(Long id, Donor donor) {
        if(donorRepository.existsById(id)) {
            donor.setId(id);
            return donorRepository.save(donor);
        }
        return null;
    }
    @Override
    public boolean deleteDonor(Long id) {
        donorRepository.deleteById(id);
        return true;
    }
    @Override
    public Donor createDonor(Donor donor) {
        Donor donor1= donorRepository.save(donor); // Ensure this method exists
        List<Receiver> receiver1=receiverRepository.findByType(donor.getBloodType());
        Receiver receiver=receiver1.get(0);
        if(receiver!=null && receiver.getStatus().equals(Status.PENDING)) {
            Donation donation = Donation.builder()
                    .donor(donor)
                    .receiver(receiver)
                    .build();
            donationRepository.save(donation);
        }
        return donor;
    }
}
