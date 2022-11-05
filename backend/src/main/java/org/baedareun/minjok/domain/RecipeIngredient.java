package org.baedareun.minjok.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
public class RecipeIngredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "ingredient_id")
    private Recipe recipe;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Ingredient ingredient;
}
