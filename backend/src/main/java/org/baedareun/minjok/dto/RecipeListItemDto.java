package org.baedareun.minjok.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.baedareun.minjok.entity.Recipe;

@Getter
@AllArgsConstructor
public class RecipeListItemDto {
    private final int id;
    private final String name;
    private final String photoKey;
    private final int likeCount;
    private final String detailSteps;

    public static RecipeListItemDto of(Recipe recipe) {
        return new RecipeListItemDto(
            recipe.getId(),
            recipe.getName(),
            "static/recipes/" + recipe.getPhoto(),
            recipe.getLikeCount(),
            recipe.getDetailSteps()
        );
    }
}
