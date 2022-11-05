package org.baedareun.minjok.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Getter
@Entity
@NoArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private int id;

    @OneToMany
    @JoinColumn(name = "Recipe")
    @Column(name = "recipe_id")
    private int recipeId;

    private String content;

    @Column(name = "created_at")
    private Timestamp createdAt;
}
