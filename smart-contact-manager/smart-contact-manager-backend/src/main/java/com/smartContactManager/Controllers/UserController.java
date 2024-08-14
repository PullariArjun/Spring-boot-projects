package com.smartContactManager.Controllers;

import com.smartContactManager.Components.Contacts;
import com.smartContactManager.Components.User;
import com.smartContactManager.Reposetories.UserReposetory;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserReposetory reposetory;



    @PostMapping("/postUser")
    public User postUser(@RequestBody User user){
        return reposetory.save(user);
    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers(){
        return reposetory.findAll();
    }

    @GetMapping("/userByEmail/{email}")
    public User userByEmail(@PathVariable String email){
        return reposetory.findByEmail(email);
    }

    @PutMapping("/addContact/{email}")
    public String addContact(@PathVariable String email, @RequestBody Contacts contact){

        if(contact == null)throw new NullPointerException("Contact is null");

        User user = reposetory.findByEmail(email);

        if(user == null)throw new NullPointerException("User not Found");

        user.getContacts().add(contact);
        System.out.println(user);
        reposetory.save(user);
        return "Added Successfully";
    }

    @GetMapping("/getContacts/{email}")
    public List<Contacts> getContacts(@PathVariable String email){


        User user = reposetory.findByEmail(email);

        return user.getContacts();
    }
}
