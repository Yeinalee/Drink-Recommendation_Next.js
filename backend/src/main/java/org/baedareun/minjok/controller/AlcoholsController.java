package org.baedareun.minjok.controller;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.baedareun.minjok.dto.AlcoholTypeDto;
import org.baedareun.minjok.enums.AlcoholType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("alcohols")
public class AlcoholsController {

    @GetMapping("types")
    public List<AlcoholTypeDto> getAlcoholTypes() {
        return Arrays.stream(AlcoholType.values())
            .map(alcoholType -> new AlcoholTypeDto(alcoholType.getName(), alcoholType.getPhotoKey()))
            .sorted(Comparator.comparing(AlcoholTypeDto::getName))
            .collect(Collectors.toList());
    }
}
