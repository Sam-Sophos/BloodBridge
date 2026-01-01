package com.example.BloodBankManagementSystem.service;

import com.example.BloodBankManagementSystem.DTO.JwtAuthenticationRequest;
import com.example.BloodBankManagementSystem.DTO.RefreshTokenRequest;
import com.example.BloodBankManagementSystem.DTO.SignInRequest;
import com.example.BloodBankManagementSystem.DTO.SignUpRequest;
import com.example.BloodBankManagementSystem.model.Role;
import com.example.BloodBankManagementSystem.model.User;
import com.example.BloodBankManagementSystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    @Autowired
    public AuthenticationServiceImpl(UserRepository userRepository,PasswordEncoder passwordEncoder,AuthenticationManager authenticationManager,JwtService jwtService){
        this.userRepository=userRepository;
        this.passwordEncoder=passwordEncoder;
        this.authenticationManager=authenticationManager;
        this.jwtService=jwtService;
    }
    @Override
    public JwtAuthenticationRequest signup(SignUpRequest signUpRequest) {
        Optional<User> oldUser=userRepository.findByUsername(signUpRequest.getUsername());
        System.out.println(oldUser);
        if(oldUser.isEmpty()) {
            User user = new User();
            user.setName(signUpRequest.getName());
            user.setUsername(signUpRequest.getUsername());
            user.setRole(Role.USER);
            user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
            User savedUser= userRepository.save(user);
            String jwt;
            String refreshToken;
            try{
                jwt=jwtService.generateToken(savedUser);
                refreshToken=jwtService.generateRefreshToken(new HashMap<>(),savedUser);
            }catch (Exception e){
                throw new RuntimeException("Token generation failed");
            }

            JwtAuthenticationRequest jwtAuthenticationRequest=new JwtAuthenticationRequest();
            jwtAuthenticationRequest.setToken(jwt);
            jwtAuthenticationRequest.setRefreshToken(refreshToken);
            return jwtAuthenticationRequest;
        }else{
            throw new IllegalArgumentException("user already exists!");
        }
    }

    @Override
    public JwtAuthenticationRequest signIn(SignInRequest signInRequest) {
        System.out.println(signInRequest);
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(signInRequest.getUsername(), signInRequest.getPassword())
            );
        }catch (AuthenticationException ex){
            throw new IllegalArgumentException("Invalid email or password!");
        }

        User user=userRepository.findByUsername(signInRequest.getUsername())
                .orElseThrow(()->new IllegalArgumentException("User not Found!"));
        String jwt;
        String refreshToken;
        try{
            jwt=jwtService.generateToken(user);
            refreshToken=jwtService.generateRefreshToken(new HashMap<>(),user);
        }catch (Exception e){
            throw new RuntimeException("Token generation failed");
        }

        JwtAuthenticationRequest jwtAuthenticationRequest=new JwtAuthenticationRequest();
        jwtAuthenticationRequest.setToken(jwt);
        jwtAuthenticationRequest.setRefreshToken(refreshToken);
        return jwtAuthenticationRequest;
    }

    @Override
    public JwtAuthenticationRequest refreshToken(RefreshTokenRequest refreshTokenRequest) {
        String userEmail=jwtService.extractUserName(refreshTokenRequest.getToken());
        User user=userRepository.findByUsername(userEmail).orElseThrow(()->new IllegalArgumentException("User not Found!"));
        if(jwtService.isTokenValid(refreshTokenRequest.getToken(),user)){
            Map<String,Object> extraClaims=new HashMap<>();
            var jwt=jwtService.generateRefreshToken(extraClaims,user);
            JwtAuthenticationRequest jwtAuthenticationRequest=new JwtAuthenticationRequest();
            jwtAuthenticationRequest.setToken(jwt);
            jwtAuthenticationRequest.setRefreshToken(refreshTokenRequest.getToken());
            return jwtAuthenticationRequest;
        }
        return null;
    }
}
