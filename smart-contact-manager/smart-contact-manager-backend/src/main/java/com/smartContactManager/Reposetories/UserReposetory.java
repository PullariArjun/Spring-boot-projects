package com.smartContactManager.Reposetories;

import com.smartContactManager.Components.Contacts;
import com.smartContactManager.Components.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.List;

@EnableJpaRepositories
public interface UserReposetory extends JpaRepository<User, Integer> {

    User findById(int id);
    List<User> findByFirstName(String name);
    List<User> findByLastName(String name);

    @Query(value = "select * from users where email = ?", nativeQuery = true)
    User findByEmail(String email);

}
