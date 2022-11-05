package org.baedareun.minjok.controller;

import lombok.AllArgsConstructor;
import org.baedareun.minjok.dto.RecipeSaveRequest;
import org.baedareun.minjok.entity.Recipe;
import org.baedareun.minjok.repository.RecipeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("recipes")
public class RecipeController {
    private final RecipeRepository recipeRepository;

    @PostMapping("")
    public void save(@RequestBody RecipeSaveRequest recipeSaveRequest) {
        recipeRepository.save(recipeSaveRequest.ToEntity()).getId();
    }

    @GetMapping("")
    public List<Recipe> getRecipes() {
        return recipeRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Recipe> getRecipeById(@PathVariable int id) {
        return recipeRepository.findById(id);

    @Transactional
    @PostMapping("{id}/likeCount")
    public void incrementLikeCount(@PathVariable int id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow();
        recipe.incrementLikeCount();
        recipeRepository.save(recipe);
    }

    @Transactional
    @DeleteMapping("{id}/likeCount")
    public void decrementLikeCount(@PathVariable int id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow();
        recipe.decrementLikeCount();
        recipeRepository.save(recipe);
    }
}
