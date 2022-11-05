package org.baedareun.minjok.controller;

import lombok.RequiredArgsConstructor;
import org.baedareun.minjok.entity.Recipe;
import org.baedareun.minjok.repository.RecipeRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("recipes")
public class RecipeController {

    private final RecipeRepository recipeRepository;

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
