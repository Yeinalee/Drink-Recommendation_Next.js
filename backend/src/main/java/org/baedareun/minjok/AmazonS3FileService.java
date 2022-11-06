package org.baedareun.minjok;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;
import java.io.IOException;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RequiredArgsConstructor
@Service
public class AmazonS3FileService {

    private final AmazonS3 amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    public String add(MultipartFile multipartFile, String path) {
        String key = UUID.randomUUID() + "." + StringUtils.getFilenameExtension(
            multipartFile.getOriginalFilename());
        path = path + "/" + UUID.randomUUID() + "." + StringUtils.getFilenameExtension(
            multipartFile.getOriginalFilename());

        try {
            amazonS3Client.putObject(new PutObjectRequest(bucket,
                                                          path,
                                                          multipartFile.getInputStream(),
                                                          null)
                                         .withCannedAcl(CannedAccessControlList.PublicRead));
        } catch (IOException e) {
            throw new RuntimeException(e.getMessage());
        }

        return key;
    }

    public void remove(String key) {
        if (key.startsWith("https://")) {
            key = key.substring(("https://knowalcohol.s3.ap-northeast-2.amazonaws.com/").length() + 1);
        }

        amazonS3Client.deleteObject(new DeleteObjectRequest(bucket, key));
    }
}
