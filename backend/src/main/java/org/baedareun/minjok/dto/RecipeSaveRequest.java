package org.baedareun.minjok.dto;

import lombok.Builder;
import org.baedareun.minjok.entity.Recipe;

public class RecipeSaveRequest {
    private int id;
    private String name;
    private String description;
    private String ingredient;
    private String photo;
    private int likeCount;
    private String detailSteps;

    @Builder
    public RecipeSaveRequest(String name, String description, String ingredient, String photo, String detailSteps) {
        this.name = name;
        this.description = description;
        this.ingredient = ingredient;
        this.photo = photo;
        this.detailSteps = detailSteps;
    }

    public Recipe ToEntity() {
        return Recipe.builder()
                .name(name)
                .description(description)
                .ingredient(ingredient)
                .photo(photo)
                .detailSteps(detailSteps)
                .build();
    }
}
