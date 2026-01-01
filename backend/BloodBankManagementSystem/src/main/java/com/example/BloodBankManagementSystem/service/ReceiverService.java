package com.example.BloodBankManagementSystem.service;

import com.example.BloodBankManagementSystem.model.Donor;
import com.example.BloodBankManagementSystem.model.Receiver;

import java.util.List;

public interface ReceiverService {
    List<Receiver> getAllReceivers();
    Receiver createReceiver(Receiver receiver);
    Receiver getReceiverById(Long id);
    Receiver addReceiver(Receiver receiver);
    Receiver updateReceiver(Long id, Receiver receiver);
    boolean deleteReceiver(Long id);
}
