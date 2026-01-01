package com.example.BloodBankManagementSystem.service;

import com.example.BloodBankManagementSystem.model.Donor;
import com.example.BloodBankManagementSystem.model.Receiver;
import com.example.BloodBankManagementSystem.model.Status;
import com.example.BloodBankManagementSystem.repository.DonorRepository;
import com.example.BloodBankManagementSystem.repository.ReceiverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ReceiverServiceImpl implements ReceiverService {
    @Autowired
    private ReceiverRepository receiverRepository;

    @Override
    public List<Receiver> getAllReceivers() {
        return receiverRepository.findAll();
    }

    @Override
    public Receiver getReceiverById(Long id) {
        return receiverRepository.findById(id).orElse(null);
    }
    @Override
    public Receiver addReceiver(Receiver receiver) {
        receiver.setStatus(Status.PENDING);
        return receiverRepository.save(receiver);
    }
    @Override
    public Receiver updateReceiver(Long id, Receiver receiver) {
        if (receiverRepository.existsById(id)) {
            receiver.setId(id);
            return receiverRepository.save(receiver);
        }
        return null;
    }
    @Override
    public boolean deleteReceiver(Long id) {
        receiverRepository.deleteById(id);
        return false;
    }
    @Override
    public Receiver createReceiver(Receiver receiver) {
        return receiverRepository.save(receiver);
    }
}
