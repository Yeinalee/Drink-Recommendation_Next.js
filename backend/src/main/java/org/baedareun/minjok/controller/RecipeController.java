package org.baedareun.minjok.controller;

import lombok.AllArgsConstructor;
import org.baedareun.minjok.dto.RecipeSaveRequest;
import org.baedareun.minjok.entity.Recipe;
import org.baedareun.minjok.repository.RecipeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
public class RecipeController {
    private final RecipeRepository recipeRepository;

    @PostMapping("/recipes")
    public void save(@RequestBody RecipeSaveRequest recipeSaveRequest) {
        recipeRepository.save(recipeSaveRequest.ToEntity()).getId();
    }

    @GetMapping("/recipes")
    public List<Recipe> getRecipes() {
        return recipeRepository.findAll();
    }

    @GetMapping("/recipes/{id}")
    public Optional<Recipe> getRecipeById(@PathVariable int id) {
        return recipeRepository.findById(id);
    }
}
