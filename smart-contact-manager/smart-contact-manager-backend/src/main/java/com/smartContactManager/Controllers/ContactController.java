package com.smartContactManager.Controllers;

import com.smartContactManager.Components.Contacts;
import com.smartContactManager.Reposetories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;

@RestController
@CrossOrigin("*")
public class ContactController {

    @Autowired
    ContactRepository repository;

    @PutMapping("/updateContact/{id}")
    public String updateContact( @PathVariable Long id, @RequestBody Contacts con){
        repository.updateContact(con.getFirstName(), con.getLastName(),con.getDateOfBirth(), ""+con.getPhoneNumber(), con.getEmail(), con.getGender(), id);
        return "Updated";
    }

    @DeleteMapping("/deleteContactByid/{id}")
    public String deleteContact(@PathVariable Integer id){
        repository.deleteContactById(id);
        return "deleted Successfully";
    }
}
