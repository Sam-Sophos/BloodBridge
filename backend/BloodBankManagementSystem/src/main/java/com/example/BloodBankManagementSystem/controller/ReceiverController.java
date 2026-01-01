package com.example.BloodBankManagementSystem.controller;

import com.example.BloodBankManagementSystem.model.Receiver;
import com.example.BloodBankManagementSystem.service.ReceiverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/receivers")
public class ReceiverController {


    private final ReceiverService receiverService;
    @Autowired
    ReceiverController(ReceiverService receiverService){
        this.receiverService=receiverService;
    }

    // Get all receivers
    @GetMapping
    public ResponseEntity<List<Receiver>> getAllReceivers() {
        List<Receiver> receivers = receiverService.getAllReceivers();
        return new ResponseEntity<>(receivers, HttpStatus.OK);
    }

    // Get receiver by ID
    @GetMapping("/{id}")
    public ResponseEntity<Receiver> getReceiverById(@PathVariable("id") Long id) {
        Receiver receiver = receiverService.getReceiverById(id);
        if (receiver != null) {
            return new ResponseEntity<>(receiver, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Create a new receiver
    @PostMapping
    public ResponseEntity<Receiver> addReceiver(@RequestBody Receiver receiver) {
        Receiver savedReceiver = receiverService.addReceiver(receiver);
        return new ResponseEntity<>(savedReceiver, HttpStatus.CREATED);
    }

    // Update a receiver by ID
    @PutMapping("/{id}")
    public ResponseEntity<Receiver> updateReceiver(@PathVariable("id") Long id, @RequestBody Receiver receiver) {
        Receiver updatedReceiver = receiverService.updateReceiver(id, receiver);
        if (updatedReceiver != null) {
            return new ResponseEntity<>(updatedReceiver, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Delete a receiver by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReceiver(@PathVariable("id") Long id) {
        boolean isDeleted = receiverService.deleteReceiver(id);
        if (isDeleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}