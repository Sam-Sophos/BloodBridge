package com.example.BloodBankManagementSystem.repository;

import com.example.BloodBankManagementSystem.model.Receiver;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReceiverRepository extends JpaRepository<Receiver,Long> {
     List<Receiver> findByType(String bloodType);
}
