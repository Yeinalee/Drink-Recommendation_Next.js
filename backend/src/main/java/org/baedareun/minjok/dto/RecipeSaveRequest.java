package org.baedareun.minjok.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.baedareun.minjok.entity.Recipe;
import org.baedareun.minjok.entity.Tag;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class RecipeSaveRequest {
//    private String name;
//    private String description;
//    private String ingredient;
    private MultipartFile file;
//    private String detailSteps;
//    private List<String> tags;
//    private List<Integer> alcoholIds;

    public Recipe ToEntity() {
        return null;
    }
}
