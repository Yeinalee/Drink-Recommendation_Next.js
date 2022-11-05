package org.baedareun.minjok.controller;

import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.baedareun.minjok.dto.RecipeListItemDto;
import org.baedareun.minjok.dto.RecipeSaveRequest;
import org.baedareun.minjok.entity.Recipe;
import org.baedareun.minjok.entity.RecipeAlcohol;
import org.baedareun.minjok.enums.TagType;
import org.baedareun.minjok.repository.RecipeAlcoholRepository;
import org.baedareun.minjok.repository.RecipeRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("recipes")
public class RecipeController {
    private final RecipeRepository recipeRepository;
    private final RecipeAlcoholRepository recipeAlcoholRepository;

    @PostMapping("")
    public String save(@ModelAttribute RecipeSaveRequest recipeSaveRequest) {
//        recipeRepository.save(recipeSaveRequest.ToEntity()).getId();
//        return "id: " + recipeSaveRequest.ToEntity().getId() +
//                "\nname: " + recipeSaveRequest.ToEntity().getName();
        System.out.println(recipeSaveRequest.getFile().getOriginalFilename());
        return null;
    }

    @GetMapping("")
    public List<RecipeListItemDto> getRecipes(
        @RequestParam(value = "tag") List<String> tag,
        @RequestParam(value = "alcoholId", required = false) List<Integer> alcoholId
    ) {
        List<Recipe> recipes = recipeRepository.findByTags(tag.stream().map(TagType::of).collect(
            Collectors.toList()));

        if (alcoholId != null && !alcoholId.isEmpty()) {
            List<RecipeAlcohol> recipeAlcohols = recipeAlcoholRepository.findByAlcoholIds(alcoholId);
            List<Integer> recipeIds = recipeAlcohols.stream()
                .map(recipeAlcohol -> recipeAlcohol.getRecipe().getId())
                .distinct()
                .collect(
                    Collectors.toList());
            recipes = recipes.stream()
                .filter(recipe -> recipeIds.contains(recipe.getId()))
                .collect(Collectors.toList());
        }

        return recipes.stream()
            .map(RecipeListItemDto::of)
            .collect(Collectors.toList());
    }

    @GetMapping("popular")
    public List<RecipeListItemDto> getPopularRecipes() {
        return recipeRepository.findAllPopular().stream()
            .map(RecipeListItemDto::of)
            .collect(Collectors.toList());
    }

    @GetMapping("{id}")
    public Optional<Recipe> getRecipeById(@PathVariable int id) {
        return recipeRepository.findById(id);
    }

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
