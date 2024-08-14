package com.smartContactManager.Reposetories;

import com.smartContactManager.Components.Contacts;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.sql.Date;

public interface ContactRepository extends CrudRepository<Contacts, Integer> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE contacts SET " +
            "firstName = ?1, " +
            "lastName = ?2, " +
            "DOB = ?3, " +
            "phoneNumber = ?4, " +
            "email = ?5, " +
            "gender = ?6 " +
            "WHERE id = ?7",
            nativeQuery = true)
    void updateContact(
            String firstName,
            String lastName,
            Date dateOfBirth,
            String phoneNumber,
            String email,
            String gender,
            Long id
    );

    @Modifying
    @Transactional
    @Query(nativeQuery = true, value = "Delete from contacts where id = ?")
    public void deleteContactById(int id);

    public Contacts findById(int id);
}
