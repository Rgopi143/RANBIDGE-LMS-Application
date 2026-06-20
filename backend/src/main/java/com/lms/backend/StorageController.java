package com.lms.backend;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import java.io.IOException;
import java.nio.file.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/storage")
@CrossOrigin(origins = "*") // In production, replace with your frontend URL
public class StorageController {

    private final String UPLOAD_DIR = "uploads/";

    public StorageController() throws IOException {
        Files.createDirectories(Paths.get(UPLOAD_DIR));
    }

    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> uploadFile(@RequestParam("file") MultipartFile file) {
        Map<String, String> response = new HashMap<>();
        try {
            if (file.isEmpty()) {
                response.put("error", "Please select a file to upload");
                return ResponseEntity.badRequest().body(response);
            }

            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path path = Paths.get(UPLOAD_DIR + fileName);
            Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);

            response.put("message", "File uploaded successfully");
            response.put("fileName", fileName);
            response.put("url", "/api/storage/files/" + fileName);
            return ResponseEntity.ok(response);

        } catch (IOException e) {
            response.put("error", "Could not upload the file: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    @GetMapping("/files/{filename:.+}")
    @ResponseBody
    public ResponseEntity<byte[]> getFile(@PathVariable String filename) {
        try {
            Path file = Paths.get(UPLOAD_DIR).resolve(filename);
            byte[] content = Files.readAllBytes(file);
            return ResponseEntity.ok().body(content);
        } catch (IOException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
