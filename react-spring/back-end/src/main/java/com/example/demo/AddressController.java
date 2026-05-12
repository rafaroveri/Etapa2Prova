package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class AddressController {

    private final List<Address> addresses = new ArrayList<>();

    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello World!";
    }

    @GetMapping("/address")
    public List<Address> getAddresses() {
        return this.addresses;
    }

    @GetMapping("/address/{cep}")
    public ResponseEntity<Address> getAddress(@PathVariable String cep) {
        for (Address address : this.addresses) {
            if (address.getCep().equals(cep)) {
                return ResponseEntity.ok(address);
            }
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/address")
    public void addAddress(@RequestBody Address address) {
        this.addresses.add(address);
    }

    @DeleteMapping("/address/{cep}")
    public ResponseEntity<Void> deleteAddress(@PathVariable String cep) {
        boolean removed = this.addresses.removeIf(a -> a.getCep().equals(cep));
        if (removed) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    // PUT - Atualizar endereço pelo CEP
    @PutMapping("/address/{cep}")
    public ResponseEntity<Address> updateAddress(@PathVariable String cep, @RequestBody Address updated) {
        for (Address address : this.addresses) {
            if (address.getCep().equals(cep)) {
                address.setRua(updated.getRua());
                address.setBairro(updated.getBairro());
                address.setCidade(updated.getCidade());
                return ResponseEntity.ok(address);
            }
        }
        return ResponseEntity.notFound().build();
    }

    // GET - Buscar por cidade
    @GetMapping("/address/cidade/{cidade}")
    public List<Address> getAddressesByCity(@PathVariable String cidade) {
        return this.addresses.stream()
                .filter(a -> a.getCidade().equalsIgnoreCase(cidade))
                .collect(Collectors.toList());
    }

    // GET - Contar endereços
    @GetMapping("/address/count")
    public Map<String, Integer> countAddresses() {
        return Map.of("total", this.addresses.size());
    }
}